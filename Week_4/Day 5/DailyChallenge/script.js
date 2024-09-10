// Array to store tasks as objects
const tasks = [];
let nextTaskId = 0;

// Function to add a new task
function addTask(event) {
    event.preventDefault();

    const input = document.getElementById('task-input');
    const taskText = input.value.trim();

    // Check if the input is not empty
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new task object
    const task = {
        task_id: nextTaskId++,
        text: taskText,
        done: false
    };

    // Add task to the array
    tasks.push(task);

    // Create task element
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.setAttribute('data-task-id', task.task_id); // Set data-task-id

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;

    // Create label
    const label = document.createElement('label');
    label.textContent = taskText;

    // Add event listener to checkbox to mark task as completed
    checkbox.addEventListener('change', function() {
        doneTask(task.task_id);
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function() {
        deleteTask(task.task_id);
    };

    // Append elements to taskDiv
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteButton);

    // Append taskDiv to the listTasks container
    const listTasks = document.querySelector('.listTasks');
    listTasks.appendChild(taskDiv);

    // Clear the input field
    input.value = '';
}

// Function to mark a task as done or undone
function doneTask(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        const taskDiv = document.querySelector(`.task[data-task-id="${taskId}"]`);
        if (task.done) {
            taskDiv.classList.add('completed');
            taskDiv.querySelector('input[type="checkbox"]').checked = true;
        } else {
            taskDiv.classList.remove('completed');
            taskDiv.querySelector('input[type="checkbox"]').checked = false;
        }
    }
}

// Function to delete a specific task
function deleteTask(taskId) {
    const index = tasks.findIndex(t => t.task_id === taskId);
    if (index > -1) {
        tasks.splice(index, 1);
        const taskDiv = document.querySelector(`.task[data-task-id="${taskId}"]`);
        if (taskDiv) {
            taskDiv.remove();
        }
    }
}

// Function to clear all tasks
function clearTasks() {
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = '';
    tasks.length = 0; // Clear the tasks array
}

// Add event listener to the form
const form = document.getElementById('task-form');
form.addEventListener('submit', addTask);

// Add event listener to the clear button
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', clearTasks);
