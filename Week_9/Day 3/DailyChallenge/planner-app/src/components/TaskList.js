import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ day }) => {
  const tasks = useSelector((state) => state.planner.tasksByDay[day] || []);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} day={day} />
      ))}
    </ul>
  );
};

export default TaskList;
