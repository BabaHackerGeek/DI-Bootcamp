import { createReducer } from '@reduxjs/toolkit';
import { addTask } from '../actions/taskActions';

const initialState = {
  tasksByDay: {}
};

const taskReducer = createReducer(initialState, {
  [addTask]: (state, action) => {
    const { day, task } = action.payload;
    if (!state.tasksByDay[day]) {
      state.tasksByDay[day] = [];
    }
    state.tasksByDay[day].push(task);
  }
});

export default taskReducer;
