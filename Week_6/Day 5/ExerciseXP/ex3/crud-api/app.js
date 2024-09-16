// Import the modules
const express = require('express');
const app = express();
const port = 5000;

// Import the data module
const dataService = require('./data/dataService');

// Middleware to parse JSON
app.use(express.json());

// Route to get posts from JSONPlaceholder
app.get('/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).send('Error fetching posts');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
