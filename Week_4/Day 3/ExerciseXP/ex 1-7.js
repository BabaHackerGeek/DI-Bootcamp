// 🌟 Exercise 1 : Find the numbers divisible by 23
// Instructions:
// 1. Create a function called `displayNumbersDivisible()` that takes no parameter.
// 2. In the function, loop through numbers 0 to 500.
// 3. Console.log all the numbers divisible by 23.
// 4. At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 
// 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

// Bonus: 
// 1. Add a parameter `divisor` to the function `displayNumbersDivisible(divisor)`.
// 2. Console.log all the numbers divisible by the given divisor and their sum.
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, and their sum.
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, and their sum.

// Solution without parameters :
function displayNumbersDivisible() {
    let sum = 0; // Initialize a variable to keep track of the sum

    // Loop through numbers 0 to 500
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) { // Check if the number is divisible by 23
            console.log(i); // Log the number
            sum += i; // Add the number to the sum
        }
    }

    // After the loop, log the total sum
    console.log("Sum: ", sum); // Output: Sum: 5313
}

// Call the function
displayNumbersDivisible();


// Solution with a parameter (Bonus) :
function displayNumbersDivisible(divisor = 23) {
    let sum = 0; // Initialize the sum of numbers divisible by the divisor

    // Loop through numbers from 0 to 500
    for (let i = 0; i <= 500; i++) {
        // Check if the number is divisible by the divisor
        if (i % divisor === 0) {
            console.log(i); // Log the number to the console
            sum += i; // Add the number to the sum
        }
    }

    // After the loop, log the total sum of numbers divisible by the divisor
    console.log("Sum:", sum); // Example: Sum: 5313 for divisor 23
}

// Call the function with the default divisor (23)
displayNumbersDivisible(); // This will log all numbers divisible by 23 and their sum (5313)

// Bonus examples:
// Call the function with a divisor of 3
displayNumbersDivisible(3); // This will log all numbers divisible by 3 and their sum

// Call the function with a divisor of 45
displayNumbersDivisible(45); // This will log all numbers divisible by 45 and their sum


// 🌟 Exercise 2 : Shopping List
// Instructions
// 1. Create a `stock` object and a `prices` object as given.
// 2. Create an array called `shoppingList` with the following items: “banana”, “orange”, and “apple”.
// 3. Create a function called `myBill()` that takes no parameters.
//    - The function should return the total price of your `shoppingList`.
//    - The item must be in stock to be added to the total price.
//    - If the item is in stock, decrease the item’s stock by 1.
// 4. Call the `myBill()` function and log the result to the console.

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

// Array representing items in the shopping cart
const shoppingList = ["banana", "orange", "apple"];

// Function to calculate the total bill
function myBill() {
    let total = 0; // Initialize the total price
    for (let item of shoppingList) {
        // Check if the item is in stock
        if (stock[item] > 0) {
            total += prices[item]; // Add the price to the total
            stock[item] -= 1; // Decrease the stock by 1
        }
    }
    return total; // Return the total price
}

console.log("Total Bill:", myBill()); // Call the myBill() function and log the result


// 🌟 Exercise 3 : What’s in my wallet?
// Instructions
// 1. Create a function named `changeEnough(itemPrice, amountOfChange)` that receives two arguments:
//    - `itemPrice`: the price of the item.
//    - `amountOfChange`: an array representing the amount of change in your pocket.
// 2. Determine whether you can afford the item.
//    - If the sum of the change is greater than or equal to the item’s price, return `true`.
//    - Otherwise, return `false`.
// 3. Assume the change is always represented in the following order: quarters, dimes, nickels, pennies.
//    - Quarters are 0.25
//    - Dimes are 0.10
//    - Nickels are 0.05
//    - Pennies are 0.01
// 4. Call the function with examples and log the result to the console.

function changeEnough(itemPrice, amountOfChange) {
    // Calculate the total value of the change
    const quarters = amountOfChange[0] * 0.25;
    const dimes = amountOfChange[1] * 0.10;
    const nickels = amountOfChange[2] * 0.05;
    const pennies = amountOfChange[3] * 0.01;

    const totalChange = quarters + dimes + nickels + pennies; // Sum the total change

    return totalChange >= itemPrice; // Return true if the change is enough, else false
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // Example: true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // Example: false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // Example: true


// 🌟 Exercise 4 : Vacations Costs
// Instructions
// 1. Define a function called `hotelCost()` that asks the user for the number of nights they would like to stay in the hotel.
//    - If the user doesn’t answer or if the answer is not a number, ask again.
//    - The hotel costs $140 per night. The function should return the total price of the hotel stay.
// 2. Define a function called `planeRideCost()` that asks the user for their destination.
//    - If the user doesn’t answer or if the answer is not a string, ask again.
//    - The function should return a different price depending on the location: "London" ($183), "Paris" ($220), all other destinations ($300).
// 3. Define a function called `rentalCarCost()` that asks the user for the number of days they would like to rent a car.
//    - If the user doesn’t answer or if the answer is not a number, ask again.
//    - The car costs $40 per day. If the user rents a car for more than 10 days, they get a 5% discount. The function should return the total price.
// 4. Define a function called `totalVacationCost()` that returns the total cost of the user’s vacation by calling the above three functions.
//    - The function should log the total cost to the console.

function hotelCost() {
    let nights;
    // Prompt the user until they enter a valid number
    do {
        nights = prompt("How many nights would you like to stay in the hotel?");
    } while (isNaN(nights) || nights === "");
    return nights * 140; // Calculate the total hotel cost
}

function planeRideCost() {
    let destination;
    // Prompt the user until they enter a valid string
    do {
        destination = prompt("What is your destination?");
    } while (!isNaN(destination) || destination === "");
    // Return the price based on the destination
    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;
    // Prompt the user until they enter a valid number
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days === "");
    const cost = days * 40; // Calculate the cost
    if (days > 10) {
        return cost * 0.95; // Apply a 5% discount if renting for more than 10 days
    }
    return cost;
}

function totalVacationCost() {
    // Calculate the total cost by calling the other functions
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const total = hotel + plane + car;
    // Log the breakdown and total cost
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total vacation cost: $${total}`);
    return total;
}

totalVacationCost(); // Call the totalVacationCost() function to calculate and log the total cost


// 🌟 Exercise 5 : Users
// Instructions
// 1. Retrieve the <div> element and console.log it.
// 2. Change the name “Pete” to “Richard”.
// 3. Delete the second <li> of the second <ul>.
// 4. Change the name of the first <li> of each <ul> to your name.
// 5. Add a class called `student_list` to both of the <ul> elements.
// 6. Add the classes `university` and `attendance` to the first <ul>.
// 7. Add a “light blue” background color and some padding to the <div>.
// 8. Do not display the <li> that contains the text node “Dan”.
// 9. Add a border to the <li> that contains the text node “Richard”.
// 10. Change the font size of the whole body.

document.addEventListener("DOMContentLoaded", function () {
    // 1. Retrieve the <div> element and log it
    const div = document.getElementById("container");
    console.log(div);

    // 2. Change the name “Pete” to “Richard”
    const pete = document.querySelector(".list li:nth-child(2)");
    pete.textContent = "Richard";

    // 3. Delete the second <li> of the second <ul>
    const secondUl = document.querySelectorAll(".list")[1];
    secondUl.removeChild(secondUl.children[1]);

    // 4. Change the name of the first <li> of each <ul> to your name
    const firstItems = document.querySelectorAll(".list li:first-child");
    firstItems.forEach(item => item.textContent = "Your Name");

    // 5. Add a class called `student_list` to both of the <ul> elements
    const uls = document.querySelectorAll(".list");
    uls.forEach(ul => ul.classList.add("student_list"));

    // 6. Add the classes `university` and `attendance` to the first <ul>
    uls[0].classList.add("university", "attendance");

    // 7. Add a “light blue” background color and some padding to the <div>
    div.style.backgroundColor = "lightblue";
    div.style.padding = "10px";

    // 8. Do not display the <li> that contains the text node “Dan”
    const liItems = document.querySelectorAll("li");
    liItems.forEach(li => {
        if (li.textContent === "Dan") {
            li.style.display = "none";
        }
    });

    // 9. Add a border to the <li> that contains the text node “Richard”
    liItems.forEach(li => {
        if (li.textContent === "Richard") {
            li.style.border = "1px solid black";
        }
    });

    // 10. Change the font size of the whole body
    document.body.style.fontSize = "16px";

    // Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
    if (div.style.backgroundColor === "lightblue") {
        alert(`Hello ${firstItems[0].textContent} and ${firstItems[1].textContent}`);
    }
});


// 🌟 Exercise 6 : Change the navbar
// Instructions
// 1. In the <div>, change the value of the id attribute from `navBar` to `socialNetworkNavigation`.
// 2. Create a new <li> tag and add the text “Logout” to it.
// 3. Append this updated <li> to the unordered list (<ul>).
// 4. Use the `firstElementChild` and `lastElementChild` properties to retrieve the first and last <li> elements from their parent <ul>.
// 5. Display the text of each link.

document.addEventListener("DOMContentLoaded", function () {
    // 1. Change the value of the id attribute from `navBar` to `socialNetworkNavigation`
    const navBar = document.getElementById("navBar");
    navBar.setAttribute("id", "socialNetworkNavigation");

    // 2. Create a new <li> tag and add the text “Logout” to it
    const newLi = document.createElement("li");
    const logoutText = document.createTextNode("Logout");
    newLi.appendChild(logoutText);

    // 3. Append this updated <li> to the unordered list (<ul>)
    const ul = navBar.querySelector("ul");
    ul.appendChild(newLi);

    // 4. Use the `firstElementChild` and `lastElementChild` properties to retrieve the first and last <li> elements from their parent <ul>
    const firstLi = ul.firstElementChild;
    const lastLi = ul.lastElementChild;

    // 5. Display the text of each link
    console.log("First link text:", firstLi.textContent);
    console.log("Last link text:", lastLi.textContent);
});


// 🌟 Exercise 7 : My Book List
// Instructions
// 1. Create an array called `allBooks` with two book objects. Each object should contain the properties: `title`, `author`, `image`, and `alreadyRead`.
// 2. Using the DOM, render each book inside a <div> element added to the <section> created in part 1.
//    - Display the book’s title and author.
//    - Set the image width to 100px.
//    - If the book is already read, set the text color to red.

document.addEventListener("DOMContentLoaded", function () {
    // 1. Create an array called `allBooks` with two book objects
    const allBooks = [
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            image: "https://example.com/hobbit.jpg",
            alreadyRead: true
        },
        {
            title: "1984",
            author: "George Orwell",
            image: "https://example.com/1984.jpg",
            alreadyRead: false
        }
    ];

    // 2. Using the DOM, render each book inside a <div> element added to the <section>
    const section = document.querySelector(".listBooks");

    allBooks.forEach(book => {
        const bookDiv = document.createElement("div");

        // Display the book’s title and author
        const bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} by ${book.author}`;
        bookDiv.appendChild(bookInfo);

        // Set the image width to 100px
        const bookImage = document.createElement("img");
        bookImage.src = book.image;
        bookImage.style.width = "100px";
        bookDiv.appendChild(bookImage);

        // If the book is already read, set the text color to red
        if (book.alreadyRead) {
            bookInfo.style.color = "red";
        }

        section.appendChild(bookDiv); // Append the bookDiv to the section
    });
});
