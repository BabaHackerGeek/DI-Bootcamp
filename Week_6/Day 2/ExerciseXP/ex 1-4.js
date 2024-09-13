// 🌟 Exercise 1: Giphy API

// Instructions
// 1. Define the API URL and API key.
// 2. Construct the full URL with the search query and rating parameters.
// 3. Use the fetch() method to make a GET request to the Giphy API.
// 4. Check if the response is ok and parse the JSON data.
// 5. Log the JavaScript object received from the API to the console.
// 6. Catch and log any errors that occur during the fetch.

// Define the API URL and API key
const API_URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const QUERY = 'hilarious';
const RATING = 'g';

// Construct the full URL with query parameters
const url = `${API_URL}?q=${QUERY}&rating=${RATING}&api_key=${API_KEY}`;

// Function to fetch data from the Giphy API
async function fetchGifs() {
    try {
        // Make a GET request to the Giphy API
        const response = await fetch(url);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Log the data to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch the data
fetchGifs();


// 🌟 Exercise 2: Giphy API
// Instructions
// 1. Read the documentation to understand the query parameters that the URL accepts.
// 2. Define the API URL and API key, and set the search query to "sun".
// 3. Set the parameters to retrieve 10 gifs and start at position 2.
// 4. Construct the full URL with query parameters for fetching the gifs.
// 5. Use the fetch() method to make a GET request to the Giphy API.
// 6. Check if the response is ok (status in the range 200-299).
// 7. Parse the JSON from the response.
// 8. Log the JavaScript object received from the API to the console.
// 9. Catch and log any errors that occur during the fetch operation.

// Define the API URL and API key
const API_URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const QUERY = 'sun'; // Search term
const LIMIT = 10; // Number of gifs to retrieve
const OFFSET = 2; // Starting position of the results

// Construct the full URL with query parameters
const url = `${API_URL}?q=${QUERY}&limit=${LIMIT}&offset=${OFFSET}&api_key=${API_KEY}`;

// Function to fetch data from the Giphy API
async function fetchGifs() {
    try {
        // Make a GET request to the Giphy API
        const response = await fetch(url);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Log the data to the console
        console.log(data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch the data
fetchGifs();


// 🌟 Exercise 3: Async function
// Instructions
// 1. Create an asynchronous function to handle the GET request to the SWAPI.
// 2. Use the `await` keyword to wait for the fetch() operation to complete.
// 3. Check if the response is ok (status in the range 200-299).
// 4. Parse the JSON data from the response.
// 5. Log the `result` property from the parsed data to the console.
// 6. Include error handling using a try-catch block to manage any issues that occur during the fetch operation.
// 7. Ensure that no `then()` method is used in this implementation.

async function fetchStarship() {
    try {
        // Make a GET request to the SWAPI
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON from the response
        const data = await response.json();

        // Log the `result` property to the console
        console.log(data.result);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the async function to fetch and log the data
fetchStarship();


// 🌟 Exercise 4: Analyze
// Function that returns a Promise which resolves with the value 'resolved' after 2 seconds
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        // Use setTimeout to delay the resolution by 2000 milliseconds (2 seconds)
        setTimeout(() => {
            resolve('resolved'); // Resolve the Promise with the value 'resolved'
        }, 2000);
    });
}

// Async function that uses await to handle asynchronous operations
async function asyncCall() {
    console.log('calling'); // Print 'calling' to the console immediately
    
    // Await the result of resolveAfter2Seconds(), pausing execution until the Promise resolves
    let result = await resolveAfter2Seconds();
    
    // Print the result to the console after the Promise resolves
    console.log(result); // This will log 'resolved' after 2 seconds
}

// Call the async function to see the result
asyncCall();

// Expected output explanation:
// 1. 'calling' is logged to the console immediately when asyncCall() is invoked.
// 2. After a 2-second delay, 'resolved' is logged to the console when the Promise returned by resolveAfter2Seconds() is resolved.
