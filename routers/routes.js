const express = require('express');
const router = express.Router();
const homecontroller = require('../Controllers/homecontroller')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.json({ extended: true });


router.post('/login', urlencodedParser, homecontroller.Loginuser)

router.get('/', (req, res) => {
    res.send('Hello from my side shubham')
});


module.exports = router;