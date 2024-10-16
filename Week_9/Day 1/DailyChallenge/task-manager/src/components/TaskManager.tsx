import React, { useReducer, useState, useRef } from 'react';
import { taskReducer, initialState } from '../reducer';
import { Task } from '../types';

const TaskManager: React.FC = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState<string>('');
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const editRef = useRef<HTMLInputElement>(null);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === '') return;
    dispatch({ type: 'ADD_TASK', text: newTask });
    setNewTask('');
  };

  // Edit an existing task
  const editTask = (id: number, newText: string) => {
    dispatch({ type: 'EDIT_TASK', id, newText });
    setEditTaskId(null);
  };

  // Filter tasks based on their completion status
  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'all') return true;
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div>
      <h1>Task Manager</h1>
      {/* Task input */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Task list */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {/* Task edit field */}
            {editTaskId === task.id ? (
              <input
                type="text"
                defaultValue={task.text}
                ref={editRef}
                onBlur={() => editTask(task.id, editRef.current!.value)}
              />
            ) : (
              <>
                <span
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  onClick={() => dispatch({ type: 'TOGGLE_TASK', id: task.id })}
                >
                  {task.text}
                </span>
                <button onClick={() => setEditTaskId(task.id)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Filter buttons */}
      <div>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', filter: 'all' })}>All</button>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', filter: 'active' })}>Active</button>
        <button onClick={() => dispatch({ type: 'FILTER_TASKS', filter: 'completed' })}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskManager;
