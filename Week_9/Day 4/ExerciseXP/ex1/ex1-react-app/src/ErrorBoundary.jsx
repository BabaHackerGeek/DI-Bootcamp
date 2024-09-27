import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // When an error is caught, set hasError to true
  componentDidCatch(error, info) {
    console.log("Error:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occured.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
