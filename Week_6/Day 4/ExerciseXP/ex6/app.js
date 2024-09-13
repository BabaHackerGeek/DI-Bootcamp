// Instructions:
// 1. Import the `chalk` package using CommonJS syntax.
// 2. Use `chalk` to style and color text in the terminal.
// 3. Write a simple script that prints a colorful message to the terminal.

const chalk = require('chalk');

// Print colorful messages
console.log(chalk.blue('Hello, this is a blue message!'));
console.log(chalk.red.bold('This message is bold and red!'));
console.log(chalk.green.bgBlack('This message has a green text on a black background!'));
