import React, { useState } from 'react';

function Events() {
  // Part I: Define the clickMe function
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Define handleKeyDown function
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(`You pressed Enter: ${e.target.value}`);
    }
  };

  // Part III: State to toggle between ON and OFF
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      {/* Part I: Button with click event */}
      <button onClick={clickMe}>Click Me</button>

      {/* Part II: Input field with key down event */}
      <input type="text" onKeyDown={handleKeyDown} />

      {/* Part III: Toggle Button for ON/OFF */}
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
