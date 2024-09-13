// Morse code JSON string
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  // Function 1: toJs
  /**
   * Converts the Morse JSON string to a JavaScript object.
   * Resolves with the object or rejects if the object is empty.
   * 
   * @returns {Promise<Object>} - A promise that resolves or rejects based on the conversion.
   */
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
          reject('Morse object is empty');
        } else {
          resolve(morseObject);
        }
      } catch (error) {
        reject('Failed to parse Morse JSON string');
      }
    });
  }
  
  // Function 2: toMorse
  /**
   * Translates a user-entered word or sentence into Morse code.
   * Resolves with the Morse translation or rejects if the word contains invalid characters.
   * 
   * @param {Object} morseJS - JavaScript object with Morse code mappings.
   * @returns {Promise<Array>} - A promise that resolves or rejects based on the translation.
   */
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or sentence:').toLowerCase();
      const morseTranslation = [];
  
      for (const char of userInput) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else if (char === ' ') {
          morseTranslation.push(' '); // Keep spaces as they are
        } else {
          reject(`Character '${char}' not found in Morse code object`);
          return;
        }
      }
      resolve(morseTranslation);
    });
  }
  
  // Function 3: joinWords
  /**
   * Joins the Morse translation array and displays it on the page.
   * 
   * @param {Array} morseTranslation - Array of Morse code strings.
   */
  function joinWords(morseTranslation) {
    const morseOutput = morseTranslation.join('\n');
    document.body.innerHTML = `<pre>${morseOutput}</pre>`;
  }
  
  // Chain the functions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));
  