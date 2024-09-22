// 🌟 Exercise 1: Creating a Simple Express.js Application with Routes
// Step 1: Setup
// 1. Create a new directory for your project.
// 2. Navigate to the project directory using your command line.
// 3. Initialize a new Node.js project by running: npm init -y

// Step 2: Install Dependencies
// Run this command to install Express: npm install express

// Step 3: Create Your Express Application
// In the project root directory, create a file called app.js
const express = require('express');  // Import Express
const app = express();               // Create an Express app

const indexRouter = require('./routes/index');  // Import the router module

// Use the router for the main routes (for '/', '/about', etc.)
app.use('/', indexRouter);

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Step 7: Test Your Routes
// Open http://localhost:3000/ and http://localhost:3000/about in your browser