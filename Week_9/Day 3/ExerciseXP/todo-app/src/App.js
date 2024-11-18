// src/App.js
import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => (
  <div>
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
