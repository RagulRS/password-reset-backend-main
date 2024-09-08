const express = require('express');
const { forgotPassword, resetPassword, login } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login); // Ensure `login` is defined and correctly imported
router.post('/forgotpassword', forgotPassword); // Ensure `forgotPassword` is defined and correctly imported
router.post('/resetpassword/:resetToken', resetPassword); // Ensure `resetPassword` is defined and correctly imported

module.exports = router;
