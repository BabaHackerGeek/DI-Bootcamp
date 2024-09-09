function areAnagrams(str1, str2) {
    // Remove spaces and convert to lowercase
    const cleanStr1 = str1.toLowerCase().replace(/\s+/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s+/g, '');

    // Compare the two sorted strings
    return cleanStr1.split('') // Split string into an array
                    .sort()    // Sort the array of characters
                    .join('')  // Join the array back into a string
        === cleanStr2.split('') // Split, sort, and join for the second string
                    .sort()
                    .join('');
}

// Example usage
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true
console.log(areAnagrams("The Morse Code", "Here come dogs")); // false
