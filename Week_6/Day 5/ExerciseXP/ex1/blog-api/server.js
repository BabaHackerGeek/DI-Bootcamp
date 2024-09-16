// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simulate a database
let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

// GET /posts route to get all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id route to get a specific post
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// POST /posts route to create a new post
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id route to update an existing post
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (post) {
        post.title = req.body.title;
        post.content = req.body.content;
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

// DELETE /posts/:id route to delete a post
app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
