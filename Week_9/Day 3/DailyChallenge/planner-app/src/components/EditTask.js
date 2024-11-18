// src/components/EditTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/planner/plannerSlice';

const EditTask = ({ task, day, onClose }) => {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (newText.trim()) {
      dispatch(editTask({ day, taskId: task.id, updatedText: newText }));
      onClose(); // Close the edit form after saving
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="Edit task"
      />
      <button onClick={handleEditTask}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditTask;
