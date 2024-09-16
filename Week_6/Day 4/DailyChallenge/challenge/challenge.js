// Instructions
// Require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.
// Use the greet function to greet the user, display the colorful message, and read and display the file’s content.

const greet = require('./greeting');
const colorfulMessage = require('./colorful-message');
const readFile = require('./read-file');

// Execute all tasks
console.log(greet('Charlie'));
colorfulMessage();
readFile();
