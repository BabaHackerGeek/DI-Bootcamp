import React, { useState } from 'react'
import './App.css'

function App() {
  // Step 1: Create the state with an array of languages
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  // Step 2: Create a function to increase the votes for a specific language
  const vote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;  // Increment the votes for the specific language
    setLanguages(newLanguages);  // Update the state
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      {/* Step 3: Render the vote count, language name, and button in the same block */}
      {languages.map((language, index) => (
        <div key={index}>
          <span>{language.votes} </span> {/* Display the votes */}
          <span>{language.name} </span> {/* Display the language name */}
          <button onClick={() => vote(index)} style={{ color: 'green' }}>Click Here</button> {/* Call the vote function when the button is clicked */}
        </div>
      ))}
    </div>
  );
}

export default App;
