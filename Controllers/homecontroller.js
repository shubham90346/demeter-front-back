const connection = require('../Database/mysql');
const database = require('../Database/mysql');
const jwt = require('jsonwebtoken')
const secretkey = 'SECRETKEY'
const bcrypt = require('bcrypt');


// LOGIN USER TOKEN 
module.exports.Loginuser = (req, res) => {
    try {
        let sql = "SELECT * FROM `demeter` WHERE email = ? AND password = ?";
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
