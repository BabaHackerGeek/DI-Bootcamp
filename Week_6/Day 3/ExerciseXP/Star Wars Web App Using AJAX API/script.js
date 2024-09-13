// Retrieve the elements from the DOM
const fetchButton = document.getElementById('fetch-button');
const loadingDiv = document.getElementById('loading');
const characterInfoDiv = document.getElementById('character-info');
const errorMessageDiv = document.getElementById('error-message');

// Function to get random character data from the API
async function fetchCharacter() {
    const apiUrl = 'https://www.swapi.tech/api/people/';
    const randomId = Math.floor(Math.random() * 83) + 1; // Random ID between 1 and 83

    try {
        // Show loading message
        loadingDiv.classList.remove('hidden');
        characterInfoDiv.classList.add('hidden');
        errorMessageDiv.classList.add('hidden');

        // Fetch data from API
        const response = await fetch(`${apiUrl}${randomId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();

        // Extract data
        const character = data.result.properties;

        // Display character data
        document.getElementById('name').textContent = character.name;
        document.getElementById('height').textContent = character.height;
        document.getElementById('gender').textContent = character.gender;
        document.getElementById('birth-year').textContent = character.birth_year;
        document.getElementById('home-world').textContent = await getHomeWorld(character.homeworld);

        // Hide loading message and show character info
        loadingDiv.classList.add('hidden');
        characterInfoDiv.classList.remove('hidden');

    } catch (error) {
        console.error('Error:', error);
        loadingDiv.classList.add('hidden');
        errorMessageDiv.classList.remove('hidden');
    }
}

// Function to get home world name
async function getHomeWorld(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data.result.properties.name;
    } catch (error) {
        console.error('Error fetching home world:', error);
        return 'Unknown';
    }
}

// Add event listener to the button
fetchButton.addEventListener('click', fetchCharacter);
