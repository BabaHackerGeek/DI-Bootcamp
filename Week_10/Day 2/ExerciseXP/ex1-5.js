// /*
//   Exercise 1: Class with Access Modifiers
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   Instructions:
//   1. Create a class named Employee with the following properties:
//      - A private property 'name' of type string.
//      - A private property 'salary' of type number.
//      - A public property 'position' of type string.
//      - A protected property 'department' of type string.
//   2. Create a constructor that initializes all these properties.
//   3. Create a public method 'getEmployeeInfo' that returns the employee’s name and position.
// */
var Employee = /** @class */ (function () {
    // Constructor to initialize the properties
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    // Public method to get employee info
    Employee.prototype.getEmployeeInfo = function () {
        return "Employee: ".concat(this.name, ", Position: ").concat(this.position);
    };
    return Employee;
}());
// Example usage:
var employee1 = new Employee('John Doe', 50000, 'Software Engineer', 'IT');
console.log(employee1.getEmployeeInfo()); // Output: Employee: John Doe, Position: Software Engineer
//   /*
//   Exercise 2: Readonly Properties in a Class
//   Instructions:
//   1. Create a class named Product with the following properties:
//      - A readonly property 'id' of type number.
//      - A public property 'name' of type string.
//      - A public property 'price' of type number.
//   2. Create a constructor to initialize these properties.
//   3. Create a method 'getProductInfo' that returns a string with the product’s name and price.
//   4. Attempt to modify the 'id' property after creating a new instance and observe the result.
// */
var Product = /** @class */ (function () {
    // Constructor to initialize the properties
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    // Method to get product information
    Product.prototype.getProductInfo = function () {
        return "Product: ".concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
//   // Example usage:
var product1 = new Product(1, 'Laptop', 999.99);
console.log(product1.getProductInfo()); // Output: Product: Laptop, Price: $999.99
// Attempting to modify the readonly 'id' property
// product1.id = 2; // This will throw an error: Cannot assign to 'id' because it is a read-only property.
/*
  Exercise 3: Class Inheritance

  Instructions:
  1. Create a base class named Animal with the following:
     - A public property 'name' of type string.
     - A method 'makeSound' that returns a string.

  2. Create a subclass Dog that extends Animal and overrides the 'makeSound' method to return "bark".

  3. Create an instance of the Dog class and call the 'makeSound' method.
*/
var Animal = /** @class */ (function () {
    // Constructor to initialize the name
    function Animal(name) {
        this.name = name;
    }
    // Method to return a generic sound (can be overridden by subclasses)
    Animal.prototype.makeSound = function () {
        return "".concat(this.name, " makes a sound.");
    };
    return Animal;
}());
// Subclass Dog that extends Animal
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Override the makeSound method to return "bark"
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, " makes a sound of bark.");
    };
    return Dog;
}(Animal));
;
var myDog = new Dog('Dog 1');
console.log(myDog.makeSound());
/*
  Exercise 4: Static Properties and Methods

  Instructions:
  1. Create a class named Calculator with the following static methods:
     - 'add(a: number, b: number): number' – returns the sum of two numbers.
     - 'subtract(a: number, b: number): number' – returns the difference between two numbers.

  2. Call these methods without creating an instance of the class.
*/
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Static method to add two numbers
    Calculator.add = function (a, b) {
        return a + b;
    };
    // Static method to subtract two numbers
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
// Example usage of static methods
var sum = Calculator.add(5, 3); // Calls the static method directly
var difference = Calculator.subtract(10, 4); // Calls the static method directly
console.log("Sum: ".concat(sum)); // Output: Sum: 8
console.log("Difference: ".concat(difference)); // Output: Difference: 6
// Function to print user details
function printUserDetails(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    // Check if membershipLevel is provided
    if (user.membershipLevel) {
        console.log("Membership Level: ".concat(user.membershipLevel));
    }
    else {
        console.log("Membership Level: Not provided");
    }
}
// Example usage:
var premiumUser1 = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    membershipLevel: "Gold",
};
var premiumUser2 = {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
};
