// Instructions:
// 1. Import the `fs` module using `require`.
// 2. Use the `fs.readFile` function to read the content from `source.txt`.
// 3. Use the `fs.writeFile` function to write the content to `destination.txt`.
// 4. Log messages to indicate success or handle errors.

const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    fs.writeFile('destination.txt', data, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File copied successfully');
        }
    });
});
