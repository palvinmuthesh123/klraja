const express = require('express');
const router = express.Router();
const productService = require('./products.service');

// routes
router.get('/otp' ,sendOTP);

module.exports = router;

function sendOTP(req, res, next) {
    productService.sendOTP()
        .then(product => res.json(product))
        .catch(err => next(err));
}
