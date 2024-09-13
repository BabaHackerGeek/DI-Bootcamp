// Instructions:
// 1. Define a class named `TodoList` inside the `todo.js` file.
// 2. The `TodoList` class should have the following methods:
//    - `addTask(task)`: Adds a new task to the list.
//    - `markTaskComplete(taskName)`: Marks a specific task as completed.
//    - `listTasks()`: Returns a list of all tasks with their statuses (complete or not).
// 3. Export the `TodoList` class using ES6 module syntax.

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.completed = true;
        }
    }

    listTasks() {
        return this.tasks;
    }
}

export { TodoList };
