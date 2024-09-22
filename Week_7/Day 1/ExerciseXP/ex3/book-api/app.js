const express = require('express');
const app = express();
const booksRouter = require('./routes/books'); // Import the router module

// Middleware to parse JSON body content
app.use(express.json());

// Use the router for the /books routes
app.use('/books', booksRouter);

// Start the server and listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
