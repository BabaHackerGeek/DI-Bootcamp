import React, { useState } from 'react';
import quotes from './QuotesDatabase'; // Import the quotes array
import './App.css'; // Import your CSS file for styles

const App = () => {
  // Initialize state for the current quote and random colors
  const [quote, setQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [quoteColor, setQuoteColor] = useState(getRandomColor());

  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Function to get a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to generate a new random quote and update colors
  const handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.quote === quote.quote); // Make sure the new quote is different

    setQuote(newQuote);
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor, color: quoteColor }}>
      <div className="quote-box">
        <h1>{quote.quote}</h1>
        <p>- {quote.author ? quote.author : "Unknown"}</p>
        <button 
        onClick={handleNewQuote} 
        style={{ backgroundColor: quoteColor }}
        aria-label="Generate a new quote">
        New Quote
        </button> 
      </div>
    </div>
  );
};

export default App;
