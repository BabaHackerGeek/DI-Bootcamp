import React, { useState } from 'react';

function App() {
  // State to store response
  const [response, setResponse] = useState(null);

  // Async function to send POST request
  const sendData = async () => {
    const url = 'https://webhook.site/b7843516-d27c-456d-92ee-ceffd770c8ae'; // Your unique URL

    // Hardcoded JSON data to send in the POST request
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      // POST request with fetch and async/await
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Send stringified JSON data
      });

      // Convert the response to JSON
      const result = await response.text(); // Webhook may return plain text instead of JSON
      console.log(result);
      setResponse(result); // Set the response to state (optional)
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Post JSON Data Example</h1>
      {/* Button to trigger sendData function */}
      <button onClick={sendData}>Send Data</button>
      
      {/* Optional: Display the response in the browser (if needed) */}
      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default App;
