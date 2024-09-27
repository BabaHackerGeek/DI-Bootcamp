import React, { Component } from 'react';

class Color extends Component {
  constructor(props) {
    super(props);
    // Step 1: Add `show` property in the state
    this.state = { 
      favoriteColor: 'red',
      show: true // Step 1: Set initial value to true
    };
  }

  componentDidMount() {
    // Automatically change color to yellow after 1 second
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  // Part I: Control whether the component should update
  shouldComponentUpdate(nextProps, nextState) {
    return true; // Allows updates
  }

  // Step 2: Log snapshot before the update
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null; // Return null since we don't need to pass anything to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  // Button click handler to change color to blue
  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  // Step 5: Button click handler to hide the Child component
  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color to Blue</button>

        {/* Step 4: Render the Child component only if `show` is true */}
        {this.state.show && <Child />}
        
        {/* Step 5: Delete button */}
        <button onClick={this.deleteChild}>Delete Header</button>
      </div>
    );
  }
}

// Step 3: Create the Child component
class Child extends Component {
  componentWillUnmount() {
    alert('The component named Header is about to be unmounted');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Color;
