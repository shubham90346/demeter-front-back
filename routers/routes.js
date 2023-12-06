const express = require('express');
const router = express.Router();
const homecontroller = require('../Controllers/homecontroller')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.json({ extended: true });


router.post('/login', urlencodedParser, homecontroller.Loginuser);
router.post('/forgot-password', urlencodedParser, homecontroller.forgotpassword);
router.get('/reset-password/:id/:token', urlencodedParser, homecontroller.resetpassword);
router.post('/reset-passwords/:id/:token', urlencodedParser, homecontroller.resetpasswords);
router.get('/sales-report', urlencodedParser, homecontroller.Salesreport);
router.get('/items-report', urlencodedParser, homecontroller.itemsreport);
router.get('/purchase-order', urlencodedParser, homecontroller.purchaseorder);
router.get('/sales-comparison-report', urlencodedParser, homecontroller.salescomparison);
router.get('/purchase-order-comparison-report', urlencodedParser, homecontroller.purchasecomparison);


// router.get('/', (req, res) => {
//   res.send('Hello from my side shubham')
// });


module.exports = router;