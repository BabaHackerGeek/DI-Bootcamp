import React, { useState } from 'react';
import CategorySelector from './components/CategorySelector';
import TaskList from './components/TaskList';

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    console.log('Selected Category ID:', categoryId);
  };

  return (
    <div>
      <h1>Productivity Tracker</h1>
      {/* Pass handleCategorySelect as onSelect */}
      <CategorySelector onSelect={handleCategorySelect} />
      {selectedCategoryId && <TaskList categoryId={selectedCategoryId} />}
    </div>
  );
};

export default App;
