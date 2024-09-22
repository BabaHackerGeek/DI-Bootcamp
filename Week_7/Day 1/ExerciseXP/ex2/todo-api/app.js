const express = require('express');  // Import Express
const app = express();               // Create an Express app

const todosRouter = require('./routes/todos');  // Import the router for todos

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/todos', todosRouter);  // Mount the router at the /todos route

// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
