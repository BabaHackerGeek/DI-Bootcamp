import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask } from '../features/planner/plannerSlice';

const TaskItem = ({ task, day }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span
        onClick={() => dispatch(toggleTaskCompletion({ day, taskId: task.id }))}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>
      <button onClick={() => dispatch(deleteTask({ day, taskId: task.id }))}>Delete</button>
    </li>
  );
};

export default TaskItem;
