const express = require('express');
const router = express.Router();
const productService = require('./products.service');

// routes
router.post('/otp' ,sendOTP);

module.exports = router;

function sendOTP(req, res, next) {
    productService.sendOTP(req.body)
        .then(product => res.json(product))
        .catch(err => next(err));
}
