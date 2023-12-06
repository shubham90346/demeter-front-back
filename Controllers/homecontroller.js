const connection = require('../Database/mysql');
const database = require('../Database/mysql');
const jwt = require('jsonwebtoken')
const secretkey = 'SECRETKEY'
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');


// LOGIN USER TOKEN 

module.exports.Loginuser = (req, res) => {
    try {
        let sql = "SELECT * FROM `users` WHERE email = ? AND password = ?";
        connection.query(sql, [req.body.email, req.body.password], (error, result) => {
            if (error) {
                res.send("error on the server")
            } else {
                if (!result) {
                    return res.send("no user found")
                } else {
                    let checkpassword = bcrypt.compareSync(req.body.password, result[0].password)
                    if (!checkpassword) {
                        result.password = undefined;
                        let token = jwt.sign({ id: result.id }, secretkey, {
                            expiresIn: 600
                        });
                        res.status(200).send({ auth: true, token: token, user: result });
                    } else {
                        return res.json("Invalid email or password");
                    }
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}


// FORGOT PASSWORD 

module.exports.forgotpassword = (req, res) => {
    const { email } = req.body;
    try {
        let sql1 = "SELECT * FROM `users` WHERE email = ?"
        connection.query(sql1, [email], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                if (!result) {
                    return res.send("no user found")
                } else {
                    const secret = secretkey + result[0].password;
                    const tokenlink = jwt.sign({ email: result[0].email, id: result[0].id }, secret, { expiresIn: "5m" })
                    const link = `http://localhost:5000/reset-passwords/${result[0].id}/${tokenlink}`
                    res.send(`Reset Password Link Sent to the Mail ${link}`);
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'shubhamkumar1.dx@gmail.com',
                            pass: 'vjii krws mrzx typz'
                        }
                    });
                    var mailOptions = {
                        from: 'youremail@gmail.com',
                        to: 'shubhamkumar1.dx@gmail.com',
                        subject: 'forgot password',
                        text: link
                    };
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                }
            }
        })

    } catch (error) {
        console.log(error)
    }
}


// RESET PASSWORD GET REQUEST

module.exports.resetpassword = (req, res) => {
    const { id, token } = req.params;
    let sql2 = "SELECT * FROM `users` WHERE id = ?"
    connection.query(sql2, [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            if (!result) {
                return res.send("no user found")
            } else {
                const secc = secretkey + result[0].password;
                console.log(secc);
                try {
                    const verify = jwt.verify(token, secc)
                    res.send({ email: verify.email })
                } catch (error) {
                    res.send("not  verified")
                }
            }
        }
    })
}


// RESET PASSWORD POST REQUEST 

module.exports.resetpasswords = (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;
    let sqll = "UPDATE `users` SET password = ('" + password + "') WHERE id = " + id + " "
    connection.query(sqll, [password], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            console.log(results)
            res.send(results[0].password)
        }
    })
}


// QB_ORDERS...OR....SALES REPORT

module.exports.Salesreport = (req, res) => {
    let qury = "SELECT * FROM `qb_orders`"
    connection.query(qury, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send({ data: result });
        }
    })
}


// QB_ITEMS...OR...ITEMS REPORT 

module.exports.itemsreport = (req, res) => {
    let quryy = "SELECT * FROM `qb_items`"
    connection.query(quryy, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send({ items: result });
        }
    })
}


// QB_PURCHASEORDER...OR...PURCHASE ORDER

module.exports.purchaseorder = (req, res) => {
    let qur = "SELECT * FROM `qb_purchaseorder`"
    connection.query(qur, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send({ orders: result });
        }
    })
}

// QB_ORDERS2022...OR...SALES COMPARISON REPORT 

module.exports.salescomparison = (req, res) => {
    let querry = "SELECT * FROM `qb_orders_2022`"
    connection.query(querry, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send({ sales_comparison: result });
        }
    })
}

//QB_PURCHASEORDER_2022...OR...OPEN PURCHASE COMPARISON REPORT 

module.exports.purchasecomparison = (req, res) => {
    let query = "SELECT * FROM `qb_purchaseorder_2022`"
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send({ purchase_order_comparison: result });
        }
    })
};








