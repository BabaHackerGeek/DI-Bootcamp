const express = require('express');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Use post routes
app.use('/api', postRoutes);

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
