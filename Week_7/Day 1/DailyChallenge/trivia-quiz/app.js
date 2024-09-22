const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use quizRouter for the '/quiz' routes
app.use('/quiz', quizRouter);

// Serve static files from the public folder
app.use(express.static('public'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
