import React from 'react'; // Import React to use JSX and components
import Garage from './Garage'; // Import the Garage component from the same folder

function Car({ model }) {
  // Define the car's color directly
  const color = 'red'; 

  return (
    <>
      {/* Display the car's color and model in an h1 element */}
      <h1>This car is {color} {model}</h1>

      {/* Render the Garage component inside Car, passing the 'size' prop with value 'small' */}
      <Garage size="small" />
    </>
  );
}

export default Car; // Export the Car component as the default export
