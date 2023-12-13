// userController.js
const User = require('../models/userModel');

const getSignupForm = (req, res) => {
  res.render('signup');
};

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send('User registered successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getSignupForm, signup };
