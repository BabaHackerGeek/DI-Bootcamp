// 🌟 Exercise 1: Scope

// Instructions:
// Analyze the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5; // Initialize 'a' with 5
    if (a > 1) { // Condition is true, so the block executes
        a = 3; // 'a' is updated to 3
    }
    alert(`inside the funcOne function ${a}`); // Alerts 3
}

// #1.1 - Run in the console:
funcOne(); // Alerts: "inside the funcOne function 3"

// #1.2 - If 'a' is declared with const instead of let,
// an error will be thrown because 'const' variables cannot be reassigned.

// #2
let a = 0; // Initialize 'a' with 0
function funcTwo() {
    a = 5; // 'a' is updated to 5
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); // Alerts the current value of 'a'
}

// #2.1 - Run in the console:
funcThree(); // Alerts: "inside the funcThree function 0"
funcTwo(); // Updates 'a' to 5
funcThree(); // Alerts: "inside the funcThree function 5"

// #2.2 - If 'a' is declared with const instead of let,
// an error will be thrown because 'const' variables cannot be reassigned.

// #3
function funcFour() {
    window.a = "hello"; // Sets a global variable 'a' on the window object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); // Alerts the global variable 'a'
}

// #3.1 - Run in the console:
funcFour(); // Sets global 'a' to "hello"
funcFive(); // Alerts: "inside the funcFive function hello"

// #4
let a = 1; // Initialize 'a' with 1
function funcSix() {
    let a = "test"; // Local 'a' is declared and initialized with "test"
    alert(`inside the funcSix function ${a}`); // Alerts the local 'a'
}

// #4.1 - Run in the console:
funcSix(); // Alerts: "inside the funcSix function test"

// #4.2 - If 'a' is declared with const instead of let,
// the behavior remains the same. Local 'a' would be "test" and not affected by the outer scope.

// #5
let a = 2; // Initialize 'a' with 2
if (true) { // Block executes because condition is true
    let a = 5; // Block-scoped 'a' initialized with 5
    alert(`in the if block ${a}`); // Alerts the block-scoped 'a'
}
alert(`outside of the if block ${a}`); // Alerts the outer 'a'

// #5.1 - Run in the console:
    // "in the if block 5"
    // "outside of the if block 2"

// #5.2 - If 'a' is declared with const instead of let,
// the behavior remains the same. Block-scoped 'a' would be 5 inside the block and outer 'a' would be 2.

// Note: const works similarly to let in terms of scoping, but with immutability.


// 🌟 Exercise 2: Ternary Operator

// Instructions:
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true; // Arrow function

// Use a ternary operator to determine experiencePoints
const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); // Logs: 10 (since winBattle() returns true)


// 🌟 Exercise 3: Is it a String?

// Instructions:
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

const isString = value => typeof value === 'string'; // Arrow function to check if value is a string

// Test the function
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// 🌟 Exercise 4: Find the Sum

// Instructions:
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b; // Arrow function to find the sum

// Example usage
console.log(sum(3, 5)); // 8


// 🌟 Exercise 5: Kg and Grams

// Instructions:
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function kgToGrams(weight) {
    return weight * 1000;
}
console.log(kgToGrams(5)); // 5000 grams

// Then, use function expression and invoke it.
const kgToGramsExpr = function(weight) {
    return weight * 1000;
};
console.log(kgToGramsExpr(5)); // 5000 grams

// Difference: Function declarations are hoisted, while function expressions are not.

// Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = weight => weight * 1000;
console.log(kgToGramsArrow(5)); // 5000 grams


// 🌟 Exercise 6: Fortune Teller

// Instructions:
// Create a self-invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numChildren, partnerName, location, jobTitle) {
    document.body.innerHTML = `<p>You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.</p>`;
})(2, 'Alice', 'Paris', 'Software Developer');


// 🌟 Exercise 7: Welcome

// Instructions:
// Create a Navbar in your HTML file.
// In your js file, create a self-invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the navbar, displaying the name of the user and his profile picture.

const navbar = document.createElement('nav'); // Create a Navbar element
document.body.appendChild(navbar); // Append the Navbar to the body

(function(username) {
    const userDiv = document.createElement('div'); // Create a div for user info
    userDiv.innerHTML = `<p>Welcome, ${username}!</p><img src="profile-pic.jpg" alt="Profile Picture">`;
    navbar.appendChild(userDiv); // Add the user info div to the Navbar
})('John');


// 🌟 Exercise 8: Juice Bar

// Instructions:
// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
    }
    addIngredients('apple', 'banana', 'orange'); // Invoke inner function
}

// Invoke outer function
makeJuice('medium');


// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    const ingredients = []; // Empty array for ingredients

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3); // Add ingredients to the array
    }

    function displayJuice() {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }

    addIngredients('apple', 'banana', 'orange'); // Add first set of ingredients
    addIngredients('grape', 'kiwi', 'mango'); // Add second set of ingredients
    displayJuice(); // Display the juice with all ingredients
}

// Invoke outer function
makeJuice('large');
