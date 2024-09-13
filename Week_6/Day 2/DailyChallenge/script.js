// API key and base URL for the Giphy API
const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const BASE_URL = 'https://api.giphy.com/v1/gifs/random';

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the form, input, container, and delete all button
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const gifsContainer = document.getElementById('gifs-container');
    const deleteAllButton = document.getElementById('delete-all');

    // Event listener for the form submission
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission
        const category = searchInput.value.trim(); // Get the category from the input
        if (category) {
            // Fetch a random GIF based on the category
            const gifUrl = await fetchRandomGif(category);
            if (gifUrl) {
                // Append the GIF to the page
                appendGif(gifUrl);
            }
            searchInput.value = ''; // Clear the input field
        }
    });

    // Event listener for the delete all button
    deleteAllButton.addEventListener('click', () => {
        gifsContainer.innerHTML = ''; // Clear all GIFs from the container
    });

    // Function to create and append a GIF element to the page
    function appendGif(url) {
        // Create a new div element for the GIF
        const gifItem = document.createElement('div');
        gifItem.className = 'gif-item';

        // Create an image element for the GIF
        const img = document.createElement('img');
        img.src = url;

        // Create a delete button for the GIF
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'X';
        // Event listener to remove the specific GIF
        deleteButton.addEventListener('click', () => {
            gifsContainer.removeChild(gifItem);
        });

        // Append the image and delete button to the GIF div
        gifItem.appendChild(img);
        gifItem.appendChild(deleteButton);
        // Append the GIF div to the container
        gifsContainer.appendChild(gifItem);
    }

    // Function to fetch a random GIF based on the category
    async function fetchRandomGif(category) {
        try {
            // Make a request to the Giphy API with the category
            const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&tag=${category}`);
            const data = await response.json();
            // Return the URL of the GIF
            return data.data.images.original.url;
        } catch (error) {
            // Log any errors that occur during the fetch
            console.error('Error fetching GIF:', error);
        }
    }
});
