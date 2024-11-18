import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/tasksSlice';

const TaskForm = ({ existingTask }) => {
  const [title, setTitle] = useState(existingTask?.title || '');
  const dispatch = useDispatch();

  const handleSubmit = useCallback(() => {
    if (existingTask) {
      dispatch(editTask({ id: existingTask.id, title }));
    } else {
      dispatch(addTask({ id: Date.now(), title, categoryId: existingTask?.categoryId || 1, completed: false }));
    }
    setTitle('');
  }, [dispatch, existingTask, title]);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {existingTask ? 'Edit Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default TaskForm;
