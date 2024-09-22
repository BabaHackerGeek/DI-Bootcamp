const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
let books = [];

// GET all books
router.get('/', (req, res) => {
    res.json(books);
});

// GET a specific book by ID
router.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// POST - Add a new book
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT - Update a book by ID
router.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.title = req.body.title;
        book.author = req.body.author;
        book.publishedYear = req.body.publishedYear;
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// DELETE - Remove a book by ID
router.delete('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.status(204).send();
});

module.exports = router;
