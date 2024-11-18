// src/components/DeleteTask.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/planner/plannerSlice';

const DeleteTask = ({ taskId, day }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({ day, taskId }));
  };

  return <button onClick={handleDeleteTask}>Delete</button>;
};

export default DeleteTask;
