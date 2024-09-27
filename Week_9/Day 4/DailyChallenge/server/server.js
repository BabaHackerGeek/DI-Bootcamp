const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware to parse the body as JSON
app.use(bodyParser.json());

// GET request to /api/hello route
app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello From Express" });
});

// POST request to /api/world route
app.post('/api/world', (req, res) => {
  console.log(req.body); // Logs the data sent from the React form
  res.send({
    message: `I received your POST request. This is what you sent me: ${req.body.input}`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
