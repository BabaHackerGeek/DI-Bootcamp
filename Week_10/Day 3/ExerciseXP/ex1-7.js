/*
  🌟 Exercise 1: Intersection Types

  Task:
  - Define an intersection type 'PersonWithAddress' that combines 'Person' and 'Address' types.
  - Create a variable of this type with properties from both types.

  Requirements:
  - 'Person' type: Contains 'name' and 'age'.
  - 'Address' type: Contains 'street' and 'city'.
*/
// Create a variable of the intersection type
var individual = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "New York",
};
console.log(individual);
/*
  🌟 Exercise 2: Type Guards with Union Types

  Task:
  - Create a function 'describeValue' that accepts 'number | string'.
  - Use type guards to return a description based on the input type.

  Requirements:
  - "This is a number" for numbers.
  - "This is a string" for strings.
*/
// Function that uses type guards
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    else if (typeof value === "string") {
        return "This is a string";
    }
}
console.log(describeValue(42)); // Output: This is a number
console.log(describeValue("hello")); // Output: This is a string
/*
  🌟 Exercise 3: Type Casting

  Task:
  - Create a variable 'someValue' of type 'any' and cast it to a string.
  - Then, use it as a string.
*/
// Create a variable of type any
var someValue = "This is a string";
// Cast it to a string using type casting
var strLength = someValue.length;
console.log(strLength); // Output: 16
/*
  🌟 Exercise 4: Type Assertions with Union Types

  Task:
  - Create a function 'getFirstElement' that takes an array of 'number | string' and uses type assertions to return the first element as a string.
  - Test with arrays of mixed types.
*/
// Function using type assertions to return the first element as a string
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement(["hello", 42])); // Output: "hello"
console.log(getFirstElement([100, "world"])); // Output: "100"
/*
  🌟 Exercise 5: Generic Constraints

  Task:
  - Create a generic function 'logLength' that takes a parameter of type T constrained to types with a length property (like string or Array).
  - The function should log the length.
*/
// Generic function with a constraint to types with a 'length' property
function logLength(item) {
    console.log(item.length);
}
logLength("Hello"); // Output: 5
logLength([1, 2, 3, 4]); // Output: 4
// Function to describe the Employee
function describeEmployee(employee) {
    if (employee.position === "Manager") {
        return "".concat(employee.name, " is a Manager in the ").concat(employee.department, " department.");
    }
    else if (employee.position === "Developer") {
        return "".concat(employee.name, " is a Developer in the ").concat(employee.department, " department.");
    }
}
var manager = { name: "Alice", age: 40, position: "Manager", department: "HR" };
var developer = { name: "Bob", age: 25, position: "Developer", department: "IT" };
console.log(describeEmployee(manager)); // Output: Alice is a Manager in the HR department.
console.log(describeEmployee(developer)); // Output: Bob is a Developer in the IT department.
/*
  🌟 Exercise 7: Type Assertions and Generic Constraints

  Task:
  - Create a generic function 'formatInput' that takes a parameter of type T constrained to have a toString() method.
  - Use type assertions to ensure the parameter is treated as a string for formatting.
  - The function should format the input as a string.
*/
// Generic function with a constraint that requires the parameter to have a toString method
function formatInput(input) {
    return "Formatted: ".concat(input.toString());
}
console.log(formatInput(123)); // Output: Formatted: 123
console.log(formatInput(true)); // Output: Formatted: true
console.log(formatInput("Hello world")); // Output: Formatted: Hello world
