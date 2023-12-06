const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demeter_live'
});

connection.connect((err)=>{
    if(err){
        console.log("error while connecting")
    }
    else{
        console.log("MYsql Database Connecting Successfully")
    }
})
module.exports= connection;