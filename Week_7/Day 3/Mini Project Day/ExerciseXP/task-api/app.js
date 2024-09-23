const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

const TASKS_FILE = 'tasks.json';

// Helper function to read tasks from the JSON file
const readTasksFromFile = () => {
    try {
        const data = fs.readFileSync(TASKS_FILE);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tasks file:', error);
        return [];
    }
};

// Helper function to write tasks to the JSON file
const writeTasksToFile = (tasks) => {
    try {
        fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error writing tasks file:', error);
    }
};

// GET /tasks: Retrieve all tasks
app.get('/tasks', (req, res) => {
    const tasks = readTasksFromFile();
    res.json(tasks);
});

// GET /tasks/:id: Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
    const tasks = readTasksFromFile();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// POST /tasks: Create a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const tasks = readTasksFromFile();
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    };
    tasks.push(newTask);
    writeTasksToFile(tasks);
    res.status(201).json(newTask);
});

// PUT /tasks/:id: Update a task by ID
app.put('/tasks/:id', (req, res) => {
    const { title, description } = req.body;
    const tasks = readTasksFromFile();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], title, description };
    writeTasksToFile(tasks);
    res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id: Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
    const tasks = readTasksFromFile();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    writeTasksToFile(tasks);
    res.status(204).send();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
