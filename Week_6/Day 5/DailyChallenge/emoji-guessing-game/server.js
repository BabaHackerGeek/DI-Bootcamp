const express = require('express');
const app = express();
const port = 3000;

// Array of emojis
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects here
];

// Middleware to serve static files
app.use(express.static('public'));
app.use(express.json());

// Route to get a random emoji and options
app.get('/api/game', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];
    const options = [correctEmoji];

    // Generate distractors
    while (options.length < 4) {
        const randomOption = emojis[Math.floor(Math.random() * emojis.length)];
        if (!options.some(option => option.name === randomOption.name)) {
            options.push(randomOption);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    res.json({ emoji: correctEmoji.emoji, options });
});

// Route to check the guess
app.post('/api/guess', (req, res) => {
    const { guess, name } = req.body;
    const correctEmoji = emojis.find(emoji => emoji.name === name);

    if (correctEmoji && correctEmoji.name === guess) {
        res.json({ correct: true });
    } else {
        res.json({ correct: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
