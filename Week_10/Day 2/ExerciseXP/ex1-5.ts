// /*
//   Exercise 1: Class with Access Modifiers

//   Instructions:
//   1. Create a class named Employee with the following properties:
//      - A private property 'name' of type string.
//      - A private property 'salary' of type number.
//      - A public property 'position' of type string.
//      - A protected property 'department' of type string.

//   2. Create a constructor that initializes all these properties.

//   3. Create a public method 'getEmployeeInfo' that returns the employee’s name and position.
// */

class Employee {
    // Private properties: can only be accessed within the class
    private name: string;
    private salary: number;
  
    // Public property: can be accessed from anywhere
    public position: string;
  
    // Protected property: can be accessed within the class and its subclasses
    protected department: string;
  
    // Constructor to initialize the properties
    constructor(name: string, salary: number, position: string, department: string) {
      this.name = name;
      this.salary = salary;
      this.position = position;
      this.department = department;
    }
  
    // Public method to get employee info
    public getEmployeeInfo(): string {
      return `Employee: ${this.name}, Position: ${this.position}`;
    }
  }
  
  // Example usage:
  const employee1 = new Employee('John Doe', 50000, 'Software Engineer', 'IT');
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

class Product {
    // Readonly property: can only be set during initialization and cannot be modified afterward
    readonly id: number;
  
    // Public properties: can be accessed and modified from anywhere
    public name: string;
    public price: number;
  
    // Constructor to initialize the properties
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    // Method to get product information
    public getProductInfo(): string {
      return `Product: ${this.name}, Price: $${this.price}`;
    }
  }
  
//   // Example usage:
  const product1 = new Product(1, 'Laptop', 999.99);
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
  class Animal {
    // Public property name
    public name: string;

    // Constructor to initialize the name
    constructor(name: string) {
      this.name = name;
    }

    // Method to return a generic sound (can be overridden by subclasses)
  public makeSound(): string {
      return `${this.name} makes a sound.`;
    }
  }

  // Subclass Dog that extends Animal
    class Dog extends Animal {
      // Override the makeSound method to return "bark"
      makeSound(): string {
        return `${this.name} makes a sound of bark.`;
      }
    };

    const myDog = new Dog('Dog 1');
    console.log(myDog.makeSound());


/*
  Exercise 4: Static Properties and Methods

  Instructions:
  1. Create a class named Calculator with the following static methods:
     - 'add(a: number, b: number): number' – returns the sum of two numbers.
     - 'subtract(a: number, b: number): number' – returns the difference between two numbers.

  2. Call these methods without creating an instance of the class.
*/

class Calculator {
  // Static method to add two numbers
  public static add(a: number, b: number): number {
    return a + b;
  }

  // Static method to subtract two numbers
  public static subtract(a: number, b: number): number {
    return a - b;
  }
}

// Example usage of static methods
const sum = Calculator.add(5, 3); // Calls the static method directly
const difference = Calculator.subtract(10, 4); // Calls the static method directly

console.log(`Sum: ${sum}`);         // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 6


/*
  Exercise 5: Extending Interfaces with Optional and Readonly Properties

  Instructions:
  1. Create an interface 'User' with the following properties:
     - 'id' (readonly): number
     - 'name': string
     - 'email': string

  2. Extend the 'User' interface to create a 'PremiumUser' interface with an additional optional property:
     - 'membershipLevel'?: string (optional)

  3. Create a function 'printUserDetails' that accepts a 'PremiumUser' and logs the details to the console.
*/

// Base User interface
interface User {
  readonly id: number;
  name: string;
  email: string;
}

// PremiumUser interface extends User and adds an optional property
interface PremiumUser extends User {
  membershipLevel?: string; // Optional property
}

// Function to print user details
function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);

  // Check if membershipLevel is provided
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
    console.log("Membership Level: Not provided");
  }
}

// Example usage:
const premiumUser1: PremiumUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  membershipLevel: "Gold",
};

const premiumUser2: PremiumUser = {
  id: 2,
  name: "Jane Smith",
  email: "jane@example.com",
};


