import React, { useState } from 'react';
import './App.css'
import FormComponent from './FormComponent'; // Import the FormComponent

function App() {
  // Step 1: Set up state to hold form values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  // Step 2: handleChange function to process input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    // Use ternary operator to handle checkbox status
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

    // handleSubmit function to modify the URL
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent page reload on form submit
      
   // Construct query parameters from form data
   const queryParams = new URLSearchParams({
    firstName: formData.firstName,
    lastName: formData.lastName,
    age: formData.age,
    destination: formData.destination,
    nutsFree: formData.nutsFree ? 'on' : 'off',
    lactoseFree: formData.lactoseFree ? 'on' : 'off',
    vegan: formData.vegan ? 'on' : 'off',
  }).toString();

  // Update the URL with the query parameters
  window.location.href = `http://localhost:5173/?${queryParams}`;
};

  return (
    <div>
      <h1>Sample Form</h1>
      
      {/* Step 3: Render the FormComponent and pass props */}
      <FormComponent 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
