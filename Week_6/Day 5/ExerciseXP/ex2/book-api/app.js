// Import the express module
const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Simulate a database for books
let books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedYear: 2021 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedYear: 2022 }
];

// GET /api/books route to get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:bookId route to get a specific book
app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// POST /api/books route to create a new book
app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
