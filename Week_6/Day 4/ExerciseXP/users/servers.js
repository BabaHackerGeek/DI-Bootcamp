const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
appendFile.get ('/users', (req, res) => {
    res.sendFile('users.html', {root: __dirname});)