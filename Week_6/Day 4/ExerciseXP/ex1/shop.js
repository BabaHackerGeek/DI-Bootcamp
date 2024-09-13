// Instructions:
// In shop.js, require the product objects from the products.js module.
// Create a function that takes a product name as a parameter and searches for the corresponding product object.
// Call this function with different product names and print the details of the products.

const products = require('./products'); // Import the array of products

// Function to find a product by name
function findProductByName(productName) {
    return products.find(product => product.name === productName);
}

// Test the function with different product names
const product1 = findProductByName('Product 1');
console.log('Product 1:', product1); // Should log details of Product 1

const product2 = findProductByName('Product 2');
console.log('Product 2:', product2); // Should log details of Product 2

const product3 = findProductByName('Product 3');
console.log('Product 3:', product3); // Should log details of Product 3

const product4 = findProductByName('Product 4');
console.log('Product 4:', product4); // Should log details of Product 4
