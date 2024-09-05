// 🌟 Exercise 1 : Colors
// Instructions
// Using this array:
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” etc…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// Array of colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Get the length of the colors array
const colorsLen = colors.length;

// Initialize a counter for the choice number
let j = 1;

// Loop through the colors array using a for loop
for (let i = 0; i < colorsLen; i++) {
    // Log the current choice number and color to the console
    console.log([j] + "# " + "choice is " + colors[i]);
    
    // Increment the counter for the next choice
    j++;
}

// Check if "Violet" is included in the colors array
const containsViolet = colors.includes("Violet");

// Log a message based on whether "Violet" is found in the array
if (containsViolet) {
    console.log("Yeah"); // "Violet" is found in the array
} else {
    console.log("No..."); // "Violet" is not found in the array
}


// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” etc…
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Function to get the ordinal suffix
const getOrdinalSuffix = (index) => {
    if (index >= 10 && index <= 20) return "th"; // Special case for 11-13
    const lastDigit = index % 10;
    return ordinal[lastDigit] || "th";
};

// Loop through the colors array and display them with ordinal suffix
colors.forEach((color, index) => {
    const suffix = getOrdinalSuffix(index + 1);
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});


// 🌟 Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// Output: ["U", "S", "A"]

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output: [empty × 2] - an array with two empty slots


// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:
// const users = [
//     { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message.
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// Map to create welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// Output: ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. Using the filter() method, create a new array containing only the Full Stack Residents.
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// Output: Array with users having the role 'Full Stack Resident'

// Bonus: Chain the filter method with a map method to return an array containing only the lastName of the Full Stack Residents.
const fullStackLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
console.log(fullStackLastNames);
// Output: Array with last names of 'Full Stack Resident'


// 🌟 Exercise 5 : Star Wars
// Instructions
// Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Reduce to combine all elements into a single string
const epicString = epic.reduce((acc, word) => acc + ' ' + word);
console.log(epicString.trim()); // "a long time ago in a galaxy far far away"


// 🌟 Exercise 6 : Employees #2
// Instructions
// Using this object:
// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                   {name: "Liam", course: "Computer Science", isPassed: false}, 
//                   {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                   {name: "Marco", course: "Robotics", isPassed: true}, 
//                   {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                   {name: "Jamie", course: "Big Data", isPassed: false}];

// 1. Using the filter() method, create a new array containing the students that passed the course.
const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// Filter to get students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);
// Output: Array with students who passed the course

// Bonus: Chain the filter method with a forEach method to congratulate the students.
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});
