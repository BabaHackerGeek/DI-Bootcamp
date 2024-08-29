// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

// Using one loop
let row = "";  // Initialize an empty string to build the pattern
for (let i = 1; i <= 6; i++) {
    row += "* ";  // Add an asterisk and a space for each iteration
    console.log(row);  // Print the current state of the row
}

// Using nested loops
for (let i = 1; i <= 6; i++) {  // Outer loop for each line
    let row = "";  // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {  // Inner loop to add asterisks to the row
        row += "* ";  // Add an asterisk and a space to the row
    }
    console.log(row);  // Print the row
}
