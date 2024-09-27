import React from 'react';
import './App.css';

function App() {
  // "Hello World!" Message
  const helloWorldMessage = <p>Hello World!</p>;

  // JSX Constant
  const myelement = <h1>I Love JSX!</h1>;

  // Sum Constant
  const sum = 5 + 5;
  const jsxSentence = <p>React is {sum} times better with JSX</p>;

  return (
    <>
    <div className="App">
      {helloWorldMessage}
      {myelement}
      {jsxSentence}
    </div>
    </>
  );
}

export default App;
