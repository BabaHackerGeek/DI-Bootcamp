const express = require('express');
const bcrypt = require('bcrypt');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const USERS_FILE = 'users.json';

// Helper function to read users from the JSON file
const readUsersFromFile = () => {
    try {
        const data = fs.readFileSync(USERS_FILE);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users file:', error);
        return [];
    }
};

// Helper function to write users to the JSON file
const writeUsersToFile = (users) => {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing users file:', error);
    }
};

// POST /register: Register a new user
app.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    
    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const users = readUsersFromFile();
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: users.length + 1,
        name,
        lastName,
        email,
        username,
        password: hashedPassword
    };

    users.push(newUser);
    writeUsersToFile(users);

    res.status(201).json({ message: 'User registered successfully' });
});

// POST /login: Login a user
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const users = readUsersFromFile();
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful' });
});

// GET /users: Retrieve all users (for demonstration purposes)
app.get('/users', (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
});

// GET /users/:id: Retrieve a specific user by ID (for demonstration purposes)
app.get('/users/:id', (req, res) => {
    const users = readUsersFromFile();
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

// PUT /users/:id: Update a user by ID (for demonstration purposes)
app.put('/users/:id', (req, res) => {
    const { name, lastName, email } = req.body;
    const users = readUsersFromFile();
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!name || !lastName || !email) {
        return res.status(400).json({ message: 'Name, Last Name, and Email are required' });
    }

    users[userIndex] = { ...users[userIndex], name, lastName, email };
    writeUsersToFile(users);

    res.json({ message: 'User updated successfully', user: users[userIndex] });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
