import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice'; // Import tasks reducer
import categoriesReducer from './features/categoriesSlice'; // Import categories reducer

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});

export default store; 
