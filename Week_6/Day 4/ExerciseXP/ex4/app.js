// Instructions:
// 1. Import the `TodoList` class from `todo.js` using ES6 module syntax.
// 2. Create an instance of the `TodoList` class.
// 3. Use the instance to add a few tasks, mark some tasks as complete, and list all tasks.
// 4. Log the tasks to the console to verify that the operations are working correctly.

import { TodoList } from './todo.js';

const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask('Learn JavaScript');
myTodoList.addTask('Complete exercises');

// Mark a task as complete
myTodoList.markTaskComplete('Learn JavaScript');

// List all tasks
console.log(myTodoList.listTasks());
