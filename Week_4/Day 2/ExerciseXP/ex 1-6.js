// 🌟 Exercise 1 : List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays
// 1. Write code to remove “Greg” from the people array.
// 2. Write code to replace “James” with “Jason”.
// 3. Write code to add your name to the end of the people array.
// 4. Write code that console.logs Mary’s index. Take a look at the indexOf method on Google.
// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this: const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// 6. Write code that gives the index of “Foo”. Why does it return -1?
// 7. Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.
// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon”.
// Hint: take a look at the break statement in the lesson.

// 🌟 Exercise 1 : List of people

// Initial array
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays

// 1. Remove "Greg" from the array
people.shift();
// people is now ["Mary", "Devon", "James"]

// 2. Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";
// people is now ["Mary", "Devon", "Jason"]

// 3. Add your name to the end of the array
people.push("YourName");
// people is now ["Mary", "Devon", "Jason", "YourName"]

// 4. Console.log Mary's index
console.log(people.indexOf("Mary")); // Output: 0

// 5. Make a copy of the array without "Mary" and "YourName"
const peopleCopy = people.slice(1, people.length - 1);
// peopleCopy is ["Devon", "Jason"]

// 6. Find the index of "Foo"
console.log(people.indexOf("Foo")); // Output: -1
// It returns -1 because "Foo" is not found in the array.

// 7. Create a variable called last which value is the last element of the array
const last = people[people.length - 1];
console.log(last); // Output: "YourName"

// Part II - Loops

// 1. Iterate through the people array and console.log each person
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Iterate through the people array and exit after console.logging "Devon"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}


// 🌟 Exercise 2 : Your favorite colors
// Instructions
// 1. Create an array called colors where the value is a list of your five favorite colors.
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” etc.
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint: create an array of suffixes to do the Bonus

// 🌟 Exercise 2 : Your favorite colors

// 1. Array of favorite colors
const colors = ["blue", "red", "green", "yellow", "purple"];

// 2. Loop to display choices
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus: Display choices with the correct suffix
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}


// 🌟 Exercise 3 : Repeat the question
// Instructions
// 1. Prompt the user for a number.
// Hint: Check the data type you receive from the prompt (i.e., Use the typeof method).
// 2. While the number is smaller than 10, continue asking the user for a new number.
// Tip: Which while loop is more relevant for this situation?

// 🌟 Exercise 3 : Repeat the question

let number = prompt("Please enter a number:");

// 2. Use a while loop to continue prompting until the number is 10 or greater
while (Number(number) < 10) {
  number = prompt("Number is less than 10, please enter a new number:");
}


// 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// Review about objects
// 1. Console.log the number of floors in the building.
// 2. Console.log how many apartments are on the floors 1 and 3.
// 3. Console.log the name of the second tenant and the number of rooms he has in his apartment.
// 4. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, increase Dan’s rent to 1200.

// 🌟 Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  // 1. Console.log the number of floors in the building
  console.log(building.numberOfFloors); // Output: 4
  
  // 2. Console.log how many apartments are on the floors 1 and 3
  console.log(building.numberOfAptByFloor.firstFloor); // Output: 3
  console.log(building.numberOfAptByFloor.thirdFloor); // Output: 9
  
  // 3. Console.log the name of the second tenant and the number of rooms he has in his apartment
  console.log(building.nameOfTenants[1]); // Output: Dan
  console.log(building.numberOfRoomsAndRent.dan[0]); // Output: 4
  
  // 4. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, increase Dan’s rent to 1200.
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
  const davidRent = building.numberOfRoomsAndRent.david[1];
  const danRent = building.numberOfRoomsAndRent.dan[1];
  
  if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }
  
  console.log(building.numberOfRoomsAndRent.dan[1]); // Output: 1200 (if condition met)

  
// 🌟 Exercise 5 : Family
// Instructions
// 1. Create an object called family with a few key-value pairs.
// 2. Using a for-in loop, console.log the keys of the object.
// 3. Using a for-in loop, console.log the values of the object.

// 🌟 Exercise 5 : Family

const family = {
    father: "John",
    mother: "Jane",
    son: "Tom",
    daughter: "Emily",
  };
  
  // 1. Console.log the keys of the object
  for (let key in family) {
    console.log(key);
  }
  
  // 2. Console.log the values of the object
  for (let key in family) {
    console.log(family[key]);
  }

  
// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

// 🌟 Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  
  // Initialize an empty string to build the sentence
  let sentence = "";
  
  // Use a for-in loop to iterate over the object properties
  for (let key in details) {
    // Concatenate the key and the value with a space
    sentence += key + " " + details[key] + " ";
  }
  
  // Trim any extra spaces at the end and log the final sentence
  console.log(sentence.trim()); // Output: "my name is Rudolf the reindeer"
  

// 🌟 Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// 🌟 Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Step 1: Get the first letter of each name
const firstLetters = names.map(name => name[0]);

// Step 2: Sort the first letters alphabetically
firstLetters.sort();

// Step 3: Join the sorted letters to form the secret society name
const secretSocietyName = firstLetters.join("");

console.log(secretSocietyName); // Output: "ABJKPS"