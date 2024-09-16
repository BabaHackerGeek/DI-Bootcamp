// Instructions
// Require the fs module and read the content from the file-data.txt file. Display the content in the terminal.

const fs = require('fs');

function readFile() {
    fs.readFile('./files/file-data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}

module.exports = readFile;
