// Instructions:
// 1. Import the `add` and `multiply` functions from `math.js` using CommonJS syntax.
// 2. Import the `lodash` package.
// 3. Use the `add` and `multiply` functions to perform calculations.
// 4. Use lodash utility functions to manipulate or format data.
// 5. Log the results to the console to verify that the calculations are correct.

const _ = require('lodash');
const { add, multiply } = require('./math.js');

// Perform calculations
const sum = add(5, 3);
const product = multiply(4, 7);

// Log results
console.log('Sum:', sum);
console.log('Product:', product);

// Example of using lodash
const array = [1, 2, 3, 4, 5];
console.log('Shuffled Array:', _.shuffle(array));
