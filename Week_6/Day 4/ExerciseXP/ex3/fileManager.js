// Instructions:
// 1. Import the 'fs' module using `require`.
// 2. Define a function named `readFile` that reads content from a specified file.
//    - Use `fs.readFile` to read the file asynchronously.
//    - Return a promise that resolves with the file content or rejects with an error.
// 3. Define a function named `writeFile` that writes content to a specified file.
//    - Use `fs.writeFile` to write the file asynchronously.
//    - Return a promise that resolves with a success message or rejects with an error.
// 4. Export both functions using `module.exports`.

const fs = require('fs');

// Function to read content from a file
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Function to write content to a file
function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File written successfully');
            }
        });
    });
}

// Export the functions
module.exports = { readFile, writeFile };
