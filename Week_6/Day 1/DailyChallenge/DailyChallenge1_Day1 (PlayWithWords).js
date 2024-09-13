// Function 1: makeAllCaps
/**
 * Takes an array of words and returns a promise.
 * If all elements in the array are strings, resolves with the array of words uppercased.
 * If not all elements are strings, rejects with a reason.
 * 
 * @param {Array} words - Array of words to check and uppercase.
 * @returns {Promise} - A promise that resolves or rejects based on the input.
 */
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      // Check if all elements are strings
      const allStrings = words.every(word => typeof word === 'string');
      
      if (allStrings) {
        // Convert all words to uppercase and resolve the promise
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        // Reject the promise if any element is not a string
        reject('Not all elements are strings');
      }
    });
  }
  
  // Function 2: sortWords
  /**
   * Takes an array of uppercased words and returns a promise.
   * If the array length is greater than 4, resolves with the array sorted alphabetically.
   * If the array length is 4 or less, rejects with a reason.
   * 
   * @param {Array} words - Array of uppercased words to sort.
   * @returns {Promise} - A promise that resolves or rejects based on the input.
   */
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        // Sort the words in alphabetical order and resolve the promise
        const sortedWords = words.sort();
        resolve(sortedWords);
      } else {
        // Reject the promise if the array length is 4 or less
        reject('Array length is 4 or less');
      }
    });
  }
  
  // Testing the functions
  
  // Example 1: Catch method is executed
  makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Example 2: Catch method is executed
  makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Example 3: Array is uppercased and sorted
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) // ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));
  