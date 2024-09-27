import React from 'react';

function FormComponent({ formData, handleChange }) {
  return (
    <form>
      {/* Input for First Name */}
      <label>
        First Name:
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
        />
      </label>
      <br />

      {/* Input for Last Name */}
      <label>
        Last Name:
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
        />
      </label>
      <br />

      {/* Input for Age */}
      <label>
        Age:
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
        />
      </label>
      <br />

      {/* Select for Destination */}
      <label>
        Select your destination:
        <select 
          name="destination" 
          value={formData.destination} 
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brzil</option>
        </select>
      </label>
      <br />

      {/* Dietary Restrictions */}
      <label>Dietary restrictions:</label>
      <br />
      <input
        type="checkbox"
        name="nutsFree"
        checked={formData.nutsFree}
        onChange={handleChange}
      />
      Nuts free
      <br />
      <input
        type="checkbox"
        name="lactoseFree"
        checked={formData.lactoseFree}
        onChange={handleChange}
      />
      Lactose free
      <br />
      <input
        type="checkbox"
        name="vegan"
        checked={formData.vegan}
        onChange={handleChange}
      />
      Vegan
      <br />

      {/* Submit Button */}
      <button type="submit">Submit</button>

      {/* Display the Form Values */}
      <h3>Entered Information:</h3>
      <p>Your First Name: {formData.firstName}</p>
      <p>Your Last Name: {formData.lastName}</p>
      <p>Your Age: {formData.age}</p>
      <p>Your Destination: {formData.destination}</p>
      <p>Your Dietary Restrictions:</p>
      <ul>
      <li>Nuts free: {formData.nutsFree ? 'Yes' : 'No'}</li>
        <li>Lactose free: {formData.lactoseFree ? 'Yes' : 'No'}</li>
        <li>Vegan meal: {formData.vegan ? 'Yes' : 'No'}</li>
      </ul>
    </form>
  );
}

export default FormComponent;
