import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const tasks = useSelector((state) => state.tasksByDay[selectedDay] || []);

  return (
    <div>
      <h1>Daily Planner</h1>
      <DatePicker onSelectDate={setSelectedDay} />
      {selectedDay && (
        <>
          <TaskList tasks={tasks} day={selectedDay} onEditTask={() => setIsEditing(true)} />
          <TaskForm day={selectedDay} onClose={() => setIsEditing(false)} />
        </>
      )}
    </div>
  );
};

export default App;
