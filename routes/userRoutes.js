// userRoutes.js
const express = require('express');
const router = express.Router();
const { getSignupForm, signup } = require('../controllers/userController');

// Define routes
router.get('/signup', getSignupForm);
router.post('/signup', signup);

module.exports = router;
