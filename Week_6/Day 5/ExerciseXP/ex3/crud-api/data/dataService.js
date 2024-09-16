const axios = require('axios');

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

// Export the function
module.exports = { fetchPosts };
