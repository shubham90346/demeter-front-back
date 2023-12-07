const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const db = require('./Database/mysql')
const router = require('./routers/routes')
const jwt =  require('jsonwebtoken')
const cors = require ('cors')

app.use(cors({
  origin:'http://localhost:3000'
}))

app.use('/', router);
app.use(bodyParser.urlencoded({ extended: true }));

 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});