import React from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => (
  <div>
    <h1>Todo List</h1>
    <TodoInput />
    <TodoList />
  </div>
);

export default App;
