// For Documentation, see https://docs.google.com/document/d/195R8AlZrUCZpbxYGtiPzgzMDdFpRVJ9YjYFS0rsTtaA/edit
// app.js
const path = require('path'); // 3)d)
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs'); // 3)c)

// Set the directory for views
app.set('views', path.join(__dirname, 'views')); // 3)c)

// Connect to MongoDB using the environment variable
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware and routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});