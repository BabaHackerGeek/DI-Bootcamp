// Instructions:
// 1. Import the `readFile` and `writeFile` functions from `fileManager.js`.
// 2. Use the `readFile` function to read the content of "Hello World.txt".
//    - Log the content to the console.
// 3. Use the `writeFile` function to write the text "Writing to the file" to "Bye World.txt".
//    - Log a success message after writing to the file.
// 4. Handle and log any errors that occur during reading or writing.

const { readFile, writeFile } = require('./fileManager');

// Read content from "Hello World.txt"
readFile('Hello World.txt')
    .then((data) => {
        // Log the content read from the file
        console.log('Read from file:', data);

        // Write new content to "Bye World.txt"
        return writeFile('Bye World.txt', 'Writing to the file');
    })
    .then((message) => {
        // Log the success message after writing to the file
        console.log(message);
    })
    .catch((err) => {
        // Handle any errors that occurred during reading or writing
        console.error('Error:', err);
    });
