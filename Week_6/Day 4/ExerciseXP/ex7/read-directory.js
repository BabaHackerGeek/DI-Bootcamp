// Instructions:
// 1. Import the `fs` module using `require`.
// 2. Use the `fs.readdir` function to read the list of files in a specified directory.
// 3. Log the names of the files to the console.
// 4. Handle and log any errors that occur.

const fs = require('fs');
const path = './'; // Specify the directory you want to read

fs.readdir(path, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log('Files in directory:', files);
});
