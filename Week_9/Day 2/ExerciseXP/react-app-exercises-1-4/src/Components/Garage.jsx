import React from 'react'; // Import React to use JSX and components

function Garage({ size }) {
  // Display the size of the garage passed as a prop
  return <p> Who lives in my {size} Garage? </p>;
}

export default Garage; // Export the Garage component as the default export
