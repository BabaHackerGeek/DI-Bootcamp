// 🌟 Exercise 1: Hello, World! Program
// What You Will Learn:
// - How to create a simple TypeScript program.
// - How to define and log variables of different types.
// Instructions:
// - Create a TypeScript program that logs the message “Hello, World!” to the console.

// Define a string variable to store the message
let message: string = "Hello, World!";

// Log the message to the console
console.log(message);


// 🌟 Exercise 2: Type Annotations
// What You Will Learn:
// - How to use type annotations in TypeScript.
// - How to define and log variables with specified types.
// Instructions:
// - Define a variable 'age' of type number and a variable 'name' of type string, and log them to the console.

// Define a number variable to store the age
let age: number = 25;

// Define a string variable to store the name
let userName: string = "John Doe";

// Log the age and name to the console
console.log("Age:", age);
console.log("Name:", userName);


// 🌟 Exercise 3: Union Types
// What You Will Learn:
// - How to use union types in TypeScript.
// - How to define variables that can hold either a string or a number.
// Description: Use union types to declare a variable that can hold either a string or a number.
// Instructions:
// - Use union types to declare a variable 'id' that can be either a string or a number.

// Define a variable 'id' that can be either a string or a number using union types
let id: string | number;

// Assign a number value to the variable 'id'
id = 12345;
console.log("ID as a number:", id);

// Assign a string value to the same variable 'id'
id = "ABC123";
console.log("ID as a string:", id);


// 🌟 Exercise 4: Control Flow with if...else
// What You Will Learn:
// - How to use if...else statements to control program flow.
// - How to handle different conditions using if...else statements.
// Instructions:
// - Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.
// - Use if...else statements to control the flow of a program.

// Function to check if a number is positive, negative, or zero
function checkNumberStatus(num: number): string {
    // Check if the number is greater than zero
    if (num > 0) {
        return "The number is positive.";
    }
    // Check if the number is less than zero
    else if (num < 0) {
        return "The number is negative.";
    }
    // If the number is neither greater nor less than zero, it must be zero
    else {
        return "The number is zero.";
    }
}

// Test the function with different values
console.log(checkNumberStatus(5));  // Output: The number is positive.
console.log(checkNumberStatus(-3)); // Output: The number is negative.
console.log(checkNumberStatus(0));  // Output: The number is zero.


// 🌟 Exercise 5: Tuple Types
// What You Will Learn:
// - How to use tuple types in TypeScript.
// - How to define functions that return multiple values of different types.
// Instructions:
// - Create a function 'getDetails' that takes a name and age as input and returns a tuple containing the input values and a greeting message.
// - The tuple should contain multiple values of different types.

// Function that takes a name and age and returns a tuple with the values and a greeting message
function getDetails(name: string, age: number): [string, number, string] {
    // Create a greeting message using the name and age
    const message = `Hello, ${name}! You are ${age} years old.`;

    // Return a tuple containing the name, age, and the greeting message
    return [name, age, message];
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);
// Expected output
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']


// 🌟 Exercise 6: Object Type Annotations
// What You Will Learn:
// - How to define the structure of an object using TypeScript’s type annotations.
// - How to create and return an object with specific properties.
// Instructions:
// - Define an object type annotation that defines the shape of a 'Person' object. The object should have two properties: 'name' (a string) and 'age' (a number).
// - Write a function named 'createPerson' that takes two parameters: 'name' (string) and 'age' (number).
// - The function should return an object that matches the 'Person' structure.
// - Test the 'createPerson' function by creating a person and logging the result to the console.

// Define the object structure using a TypeScript type annotation
type Person = {
    name: string;
    age: number;
};

// Function that creates a Person object with the specified name and age
function createPerson(name: string, age: number): Person {
    // Return an object that matches the Person structure
    return {
        name: name,
        age: age,
    };
}

// Test the function by creating a person and logging the result to the console
const person = createPerson("Alice", 30);
console.log(person); // Output: { name: 'Alice', age: 30 }


// 🌟 Exercise 7: Type Assertions
// What You Will Learn:
// - How to use type assertions in TypeScript to cast an element to a specific type.
// - How to access and manipulate properties of an HTML element after casting.
// Instructions:
// - Use `document.getElementById()` to retrieve an HTML element from the DOM.
// - Apply a type assertion to cast the element to a specific HTML element type, such as `HTMLInputElement`.
// - Once cast, use the properties of the specific element type, like setting the value of an input element.
// - Ensure that you can successfully set or manipulate a property of the element.

// Get an HTML element from the DOM using its ID
const inputElement = document.getElementById('myInput') as HTMLInputElement;

// Use type assertion to cast the element to HTMLInputElement and set its value
if (inputElement) {
    inputElement.value = "Hello, World!";
} else {
    console.log("Element not found.");
}

// Test the functionality by logging the value of the input element to the console
console.log(inputElement?.value); // Output: 'Hello, World!'


// 🌟 Exercise 8: switch Statement with Complex Conditions
// What You Will Learn:
// - How to use a switch statement in TypeScript.
// - How to handle multiple conditions using complex cases in a switch statement.
// Instructions:
// - Create a function 'getAction' that takes a string representing a user role and returns an action for the user.
// - Use a switch statement with complex conditions to handle multiple roles.

// Function that takes a user role and returns an action based on the role
function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}

// Test the function with different roles
console.log(getAction("admin"));    // Output: Manage users and settings
console.log(getAction("editor"));   // Output: Edit content
console.log(getAction("viewer"));   // Output: View content
console.log(getAction("guest"));    // Output: Limited access
console.log(getAction("unknown"));  // Output: Invalid role


// 🌟 Exercise 9: Function Overloading with Default Parameters
// What You Will Learn:
// - How to use function overloading in TypeScript.
// - How to create overloaded functions with default parameters.
// Instructions:
// - Create an overloaded function 'greet' that can either take a name and greet the person, or take no arguments and return a default greeting.

// Function overload declarations
function greet(name: string): string;
function greet(): string;

// Function implementation with default parameters
function greet(name?: string): string {
    // Check if the name is provided
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, there!";
    }
}

// Test the function with different scenarios
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet());        // Output: Hello, there!
