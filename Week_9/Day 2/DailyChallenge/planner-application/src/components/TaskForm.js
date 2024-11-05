import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../actions/taskActions';

const TaskForm = ({ day, taskId, existingTask, onClose }) => {
  const [text, setText] = useState(existingTask ? existingTask.text : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTask) {
      dispatch(editTask(day, taskId, { text }));
    } else {
      dispatch(addTask(day, { id: Date.now(), text }));
    }
    setText('');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
        required
      />
      <button type="submit">{existingTask ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
