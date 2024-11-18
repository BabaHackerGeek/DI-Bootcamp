import { createSlice } from '@reduxjs/toolkit';

const plannerSlice = createSlice({
  name: 'planner',
  initialState: {
    tasksByDay: {}, // Stores tasks per day { "YYYY-MM-DD": [{ id, text, completed }, ...] }
  },
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push({ id: Date.now(), text: task, completed: false });
    },
    editTask: (state, action) => {
      const { day, taskId, updatedText } = action.payload;
      const tasks = state.tasksByDay[day];
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        task.text = updatedText;
      }
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      state.tasksByDay[day] = state.tasksByDay[day].filter((task) => task.id !== taskId);
    },
    toggleTaskCompletion: (state, action) => {
      const { day, taskId } = action.payload;
      const task = state.tasksByDay[day].find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskCompletion } = plannerSlice.actions;
export default plannerSlice.reducer;
