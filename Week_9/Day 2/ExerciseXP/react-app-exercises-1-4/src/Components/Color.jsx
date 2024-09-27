import React, { useState, useEffect } from 'react';

function Color() {
  // Step 1: Create a state variable for the favorite color
  const [favoriteColor, setFavoriteColor] = useState('red');

  // Step 2: useEffect hook that triggers after rendering
  useEffect(() => {
    alert('useEffect reached');
  }, [favoriteColor]);  // Dependency array ensures useEffect is called when favoriteColor changes

  // Step 3: Function to change the color to blue
  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      {/* Display the favorite color */}
      <h1>{favoriteColor}</h1>

      {/* Button to change the color */}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Color;
