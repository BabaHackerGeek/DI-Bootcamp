import './App.css'; // Import the CSS for styling
import Car from './Components/Car'; // Import the Car component from the Components folder
import Events from './Components/Events'; // Import the Events component from the Components folder
import Phone from './Components/Phone'; // Import Phone component from the Components folder
import Color from './Components/Color'; // Import the Color component from the Components folder

function App() {
  // Define an object with car information (name and model)
  const carinfo = { name: 'Ford', model: 'Mustang' };

  return (
    <div className="App">
      {/* Pass the model of the car as a prop to the Car component */}
      <Car model={carinfo.model} />

      {/* Render the Events component */}
      <Events />

      {/* Render the Phone component */}
      <Phone />

      {/* Render the Color component */}
      <Color />
    </div>
  );
}

export default App; // Export the App component as the default export
