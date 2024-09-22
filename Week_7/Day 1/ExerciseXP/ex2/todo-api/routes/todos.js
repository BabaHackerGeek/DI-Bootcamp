const express = require('express');
const router = express.Router(); // Create a router

// Sample in-memory database for storing to-do items
let todos = [
    { id: 1, task: 'Do the dishes', completed: false },
    { id: 2, task: 'Buy groceries', completed: false }
];

// Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
    const newTodo = {
        id: todos.length + 1,  // Simple ID generation (in a real app, this should be handled by a database)
        task: req.body.task,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo); // Return the new todo
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.task = req.body.task;
        todo.completed = req.body.completed;
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== todoId);
    res.status(204).send();  // Send no content status
});

module.exports = router;  // Export the router
