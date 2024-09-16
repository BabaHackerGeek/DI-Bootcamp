// Instructions
// Require the chalk package and use it to create and display a colorful message in the terminal.

const chalk = require('chalk');

function colorfulMessage() {
    console.log(chalk.blue('This is a blue message!'));
    console.log(chalk.red.bold('This is a red bold message!'));
}

module.exports = colorfulMessage;
