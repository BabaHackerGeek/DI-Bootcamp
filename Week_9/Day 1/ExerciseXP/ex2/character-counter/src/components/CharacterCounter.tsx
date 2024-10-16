import React, { useRef, useState } from 'react';

const CharacterCounter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null); // Create a reference to the input element
  const [charCount, setCharCount] = useState<number>(0); // State to store character count

  const handleInputChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length); // Update the character count
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef} // Attach the ref to the input
        onChange={handleInputChange} // Listen for changes
        placeholder="Type something..."
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
