import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    postResponse: '' // To store the response from the POST request
  };

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    this.setState({ message: data.message });
  }

  // Function to handle form submission
  handleSubmit = async (event) => {
    event.preventDefault();
    const input = event.target.elements.inputField.value;

    // POST request to the Express server
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input })
    });

    const data = await response.json();
    this.setState({ postResponse: data.message });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="inputField" placeholder="Type something" />
          <button type="submit">Submit</button>
        </form>
        {/* Display the response from the POST request */}
        <p>{this.state.postResponse}</p>
      </div>
    );
  }
}

export default App;
