import React, { Component } from 'react';
import data from '../data.json'; // Import the JSON data

class Example2 extends Component {
  render() {
    return (
      <div>
        <h1>Skills</h1>
        {data.Skills.map((skillArea, index) => (
          <div key={index}>
            <h2>{skillArea.Area}</h2>
            <ul>
              {skillArea.SkillSet.map((skill, idx) => (
                <li key={idx}>
                  {skill.Name} {skill.Hot && <strong>(Hot)</strong>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
