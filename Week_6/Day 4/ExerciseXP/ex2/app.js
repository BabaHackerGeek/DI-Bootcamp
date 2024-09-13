// Instructions:
// In app.js, import the array of person objects from the data.js module.
// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js.

import people from './data'; // Import the array of people from data.js

// Function to calculate the average age of the people
function calculateAverageAge(persons) {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    return totalAge / persons.length;
}

// Calculate and print the average age
const averageAge = calculateAverageAge(people);
console.log(`The average age is ${averageAge}`);
