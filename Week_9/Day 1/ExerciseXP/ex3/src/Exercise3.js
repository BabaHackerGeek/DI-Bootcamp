import React, { Component } from 'react';
import './Exercise.css'; // Import the CSS file

class Exercise extends Component {
  render() {
    // Inline styles for the <h1> element
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        {/* Heading with styles from the style_header object */}
        <h1 style={style_header}>This is a Styled Header</h1>

        {/* Paragraph (styled in Exercise.css) */}
        <p className="para">This is a simple paragraph.</p>

        {/* Link */}
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Visit Example.com</a>

        {/* Form */}
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <button type="submit">Submit</button>
        </form>

        {/* Image */}
        <img src="https://www.tourmag.com/photo/art/grande/67681357-47801633.jpg?v=1664466045" alt="Example" />

        {/* List */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
