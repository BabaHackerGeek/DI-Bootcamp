// 🌟 Exercise 3: JSON Mario
// Instructions:
// Convert the given JavaScript object into a JSON object.
// Convert and pretty print the JSON object.
// Use your web inspector to add a breakpoint and check the values of the JSON object in the debugger.

// Step 1: Define the JavaScript object
const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12
    },
    bowser: {
      description: "Big and green, hates princesses.",
      height: 16,
      weight: 6,
      speed: 4
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2
    }
  }
};

// Step 2: Convert JavaScript object to JSON string
const jsonString = JSON.stringify(marioGame);

// Print the JSON string to the console
console.log("JSON String:");
console.log(jsonString);

// Step 3: Convert and pretty print the JSON string
const prettyJsonString = JSON.stringify(marioGame, null, 2); // `2` specifies the number of spaces for indentation

// Print the pretty JSON string to the console
console.log("Pretty JSON String:");
console.log(prettyJsonString);

// Optional: To use the web inspector for debugging, you can:
// 1. Open the browser's developer tools (usually with F12 or Ctrl+Shift+I).
// 2. Go to the "Sources" tab.
// 3. Paste the code into the console or save it in a .js file and load it.
// 4. Add a breakpoint at the console.log(prettyJsonString); line by clicking on the line number.
// 5. Reload the page or run the code.
// 6. Inspect the value of `prettyJsonString` in the "Scope" or "Watch" section of the debugger.
