import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTasksByCategory } from '../selectors/selectors';
import { toggleTaskCompletion, deleteTask } from '../features/tasksSlice';

const TaskList = ({ categoryId }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

  const handleToggleCompletion = id => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleDelete = id => {
    dispatch(deleteTask(id));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleCompletion(task.id)}
          >
            {task.title}
          </span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
