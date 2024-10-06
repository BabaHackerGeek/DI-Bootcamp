import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  // Function to handle different operations
  const calculateResult = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    let res = 0;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        res = num1 / num2;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div>
      <h1>Universal Calculator</h1>

      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter first number"
      />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>

      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter second number"
      />

      <button onClick={calculateResult}>Calculate</button>

      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;
