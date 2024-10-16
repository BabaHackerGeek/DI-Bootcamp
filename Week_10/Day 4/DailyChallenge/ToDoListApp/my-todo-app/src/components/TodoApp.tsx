import React, { useState } from 'react';
import List from './List';
import { Todo } from '../types';

const TodoApp: React.FC = () => {
  // Initial state for the todos
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn TypeScript" },
    { id: 2, text: "Build a To-Do App" },
  ]);

  // Function to add a new todo
  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text: `New To-Do ${todos.length + 1} (Added at ${new Date().toLocaleTimeString()})`,
    };
    setTodos([...todos, newTodo]); // Add the new todo to the existing list
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <button onClick={addTodo}>Add To-Do</button>
      <List items={todos} renderItem={(todo) => <span>{todo.text}</span>} />
    </div>
  );
};

export default TodoApp;
