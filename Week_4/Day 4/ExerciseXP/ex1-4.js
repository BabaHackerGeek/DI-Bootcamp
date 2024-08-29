// 🌟 Exercise 1 : Change the article
// Instructions:
// 1. Using a DOM property, retrieve the h1 and console.log it.
const h1Element = document.querySelector('h1');
console.log(h1Element);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article');
const lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);

// 3. Add an event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3Element = document.querySelector('h3');
h3Element.addEventListener('click', function() {
    h3Element.style.display = 'none';
});

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
button.textContent = 'Make Paragraphs Bold';
document.body.appendChild(button);

button.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
    });
});

// BONUS 1: When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1Element.addEventListener('mouseover', function() {
    const randomSize = Math.floor(Math.random() * 101); // Random size between 0 and 100
    h1Element.style.fontSize = `${randomSize}px`;
});

// BONUS 2: When you hover on the 2nd paragraph, it should fade out.
const secondParagraph = document.querySelectorAll('article p')[1];
secondParagraph.addEventListener('mouseover', function() {
    secondParagraph.style.transition = 'opacity 1s';
    secondParagraph.style.opacity = '0';
});


// 🌟 Exercise 2 : Work with forms
// Instructions:
// 1. Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form);

// 2. Retrieve the inputs by their id and console.log them.
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput, lastNameInput);

// 3. Retrieve the inputs by their name attribute and console.log them.
const firstNameInputByName = document.querySelector('input[name="firstname"]');
const lastNameInputByName = document.querySelector('input[name="lastname"]');
console.log(firstNameInputByName, lastNameInputByName);

// 4. When the user submits the form (ie. submit event listener)
//    - Use event.preventDefault() to prevent the default form submission.
form.addEventListener('submit', function(event) {
    event.preventDefault();

    //    - Get the values of the input tags.
    const firstNameValue = firstNameInput.value;
    const lastNameValue = lastNameInput.value;

    //    - Make sure that they are not empty.
    if (firstNameValue !== '' && lastNameValue !== '') {
        //    - Create an li per input value.
        const firstNameLi = document.createElement('li');
        const lastNameLi = document.createElement('li');

        firstNameLi.textContent = firstNameValue;
        lastNameLi.textContent = lastNameValue;

        //    - Append them to the <ul class="usersAnswer"></ul>.
        const usersAnswerList = document.querySelector('.usersAnswer');
        usersAnswerList.appendChild(firstNameLi);
        usersAnswerList.appendChild(lastNameLi);
    }
});


// 🌟 Exercise 3 : Transform the sentence
// Instructions:
// 1. Declare a global variable named allBoldItems.
let allBoldItems;

// 2. Create a function called getBoldItems() that takes no parameters.
//    - This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    allBoldItems = document.querySelectorAll('strong');
}
getBoldItems(); // Call the function to collect the bold items

// 3. Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

// 5. Call the function highlight() on mouseover, and returnItemsToDefault() on mouseout.
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);


// 🌟 Exercice 4 : Volume of a sphere
// Instructions:
// 1. Write a JavaScript program to calculate the volume of a sphere when the user inputs the radius.

document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const radiusInput = document.getElementById('radius');
    const volumeInput = document.getElementById('volume');
    const radius = parseFloat(radiusInput.value); // Get the radius from the input

    if (!isNaN(radius)) { // Check if the input is a valid number
        const volume = (4/3) * Math.PI * Math.pow(radius, 3); // Calculate the volume
        volumeInput.value = volume.toFixed(2); // Display the volume in the volume input field
    } else {
        volumeInput.value = 'Invalid input'; // Display error message if input is not valid
    }
});
