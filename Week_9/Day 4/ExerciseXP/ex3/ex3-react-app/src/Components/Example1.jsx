import React, { Component } from 'react';
import data from '../data.json'; // Import the JSON data

class Example1 extends Component {
  render() {
    return (
      <div>
        <h1>Social Media Links</h1>
        <ul>
          {data.SocialMedias.map((media, index) => (
            <li key={index}>
              <a href={media} target="_blank" rel="noopener noreferrer">
                {media}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
