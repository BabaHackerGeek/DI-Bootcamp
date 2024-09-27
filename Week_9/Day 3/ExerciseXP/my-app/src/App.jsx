import React from 'react';
import './App.css';
import BuggyCounter from './BuggyCounter'; // Import BuggyCounter
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary
import Color from './Color'; // Import Color component for lifecycle exercise

function App() {
  return (
    <div className="App">
      {/* BuggyCounter Simulations */}
      <h1>Simulation 1: Both BuggyCounters in One Error Boundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 2: Each BuggyCounter in Its Own Error Boundary</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h1>Simulation 3: BuggyCounter Without Error Boundary</h1>
      <BuggyCounter />

      {/* React Lifecycle Method Exercise */}
      <h1>React Lifecycle Exercise: Changing Color</h1>
      <Color />  {/* Make sure this is present */}
    </div>
  );
}

export default App;
