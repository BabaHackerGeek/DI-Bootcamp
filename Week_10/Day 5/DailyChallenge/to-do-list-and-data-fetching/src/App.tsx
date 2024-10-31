import React from 'react';
import DataFetcher from './components/DataFetcher';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Recipe List</h1>
      <DataFetcher />
    </div>
  );
};

export default App;
