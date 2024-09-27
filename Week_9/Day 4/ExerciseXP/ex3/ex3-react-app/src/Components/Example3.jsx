import React, { Component } from 'react';
import data from '../data.json'; // Import the JSON data

class Example3 extends Component {
  render() {
    return (
      <div>
        <h1>Experiences</h1>
        {data.Experiences.map((experience, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            {/* Display company logo */}
            <img 
              src={experience.logo} 
              alt="Company Logo" 
              style={{ borderRadius: '50%', width: '150px', height: '150px' }} 
            />
            <h2>
              <a href={experience.url} target="_blank" rel="noopener noreferrer">
                {experience.companyName}
              </a>
            </h2>

            {/* Loop through roles */}
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <p>{role.startDate} - {role.endDate}</p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
