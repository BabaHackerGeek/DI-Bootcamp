// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

// Destructuring assignment to extract values from the object
const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// Output the extracted values in a formatted string
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Expected output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// 🌟 Exercise 2: Display Student Info
// Instructions
// function displayStudentInfo(objUser){
//     //destructuring
// }

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// Output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser) {
    // Destructure the first and last names from the object
    const { first, last } = objUser;
    // Return a formatted string with the full name
    return `Your full name is ${first} ${last}`;
}

// Test the function
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
// Expected output: Your full name is Elie Schoppik


// 🌟 Exercise 3: User & id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Expected output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert the users object to an array of key-value pairs
const usersArray = Object.entries(users);
console.log(usersArray);
// Expected output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Modify the outcome of part 1, by multiplying the user’s ID by 2.
// Expected output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const modifiedUsersArray = usersArray.map(([key, id]) => [key, id * 2]);
console.log(modifiedUsersArray);
// Expected output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


// 🌟 Exercise 4 : Person class
// Instructions
// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// Expected output: "object"
// Explanation: `member` is an instance of the Person class, and its type is "object".


// 🌟 Exercise 5 : Dog class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Analyze the options below. Which constructor will successfully extend the Dog class?

// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

// Analysis:
// - Option 1: Fails because `super(name)` is missing. The parent constructor is not called.
// - Option 2: Correctly calls `super(name)` to initialize the parent class.
// - Option 3: Fails because `super(name)` is called with an undefined variable `name`.
// - Option 4: Fails because `this.name = name` should be done through `super(name)`.


// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] 
// Expected output: False
// Explanation: Two different array instances with the same content are not equal in JavaScript.

// {} === {}
// Expected output: False
// Explanation: Two different object instances are not equal in JavaScript.

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number);
// Expected output: 4
// Explanation: object2 is a reference to object1, so changes to object1 are reflected in object2.

console.log(object3.number);
// Expected output: 4
// Explanation: object3 is also a reference to object1, so it reflects the change.

console.log(object4.number);
// Expected output: 5
// Explanation: object4 is a different object with its own properties, unaffected by changes to object1.


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));
// Expected output: Moooo I'm a cow, named Lily and I'm brown and white
