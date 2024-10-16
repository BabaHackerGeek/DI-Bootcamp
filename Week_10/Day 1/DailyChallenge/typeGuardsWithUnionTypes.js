// 🌟 Daily Challenge: Type Guard with Union Types
// What You Will Learn:
// - How to use type guards in TypeScript.
// - How to handle different types of inputs from a union type.
// - How to perform specific operations based on the input type.
// Time Needed: 30 minutes
// Description:
// - Create a function that uses type guards to handle different types of inputs from a union type and perform specific operations based on the input type.
// Function that accepts an input of type number | string | boolean and processes it based on its type
function processInput(input) {
    // Check if the input is a number
    if (typeof input === "number") {
        return input * input; // Return the square of the number
    }
    // Check if the input is a string
    else if (typeof input === "string") {
        return input.toUpperCase(); // Return the uppercase version of the string
    }
    // Check if the input is a boolean
    else if (typeof input === "boolean") {
        return !input; // Return the negated value of the boolean
    }
    // If none of the conditions match (this should not happen), return a default value
    return input;
}
// Test the function with different types of inputs
console.log(processInput(5)); // Output: 25
console.log(processInput("hello")); // Output: HELLO
console.log(processInput(true)); // Output: false
