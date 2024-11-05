import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskList = ({ tasks, day, onEditTask }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onEditTask(task.id)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(day, task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
