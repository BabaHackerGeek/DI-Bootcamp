// 🌟 Exercise 1: Comparison

/**
 * Create a function called compareToTen(num) that returns a Promise.
 * The promise resolves if num is less than or equal to 10.
 * The promise rejects if num is greater than 10.
 * 
 * @param {number} num - The number to compare to 10.
 * @returns {Promise} - A promise that resolves or rejects based on the comparison.
 */
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`Number ${num} is less than or equal to 10`);
      } else {
        reject(`Number ${num} is greater than 10`);
      }
    });
  }
  
  // Testing the function
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    
// 🌟 Exercise 2: Promises

/**
 * Create a promise that resolves after 4 seconds with the string "success".
 * 
 * @returns {Promise} - A promise that resolves with "success" after 4 seconds.
 */
const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  // Testing the promise
  promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

    
// 🌟 Exercise 3: Resolve & Reject

/**
 * Use Promise.resolve(value) to create a promise that resolves with the value 3.
 * 
 * @returns {Promise} - A promise that resolves with 3.
 */
const resolvedPromise = Promise.resolve(3);
resolvedPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));

/**
 * Use Promise.reject(error) to create a promise that rejects with the string "Boo!".
 * 
 * @returns {Promise} - A promise that rejects with "Boo!".
 */
const rejectedPromise = Promise.reject("Boo!");
rejectedPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
