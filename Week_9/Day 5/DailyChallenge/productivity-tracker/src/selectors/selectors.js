import { createSelector } from 'reselect';

// Input selectors
const selectTasks = state => state.tasks.tasks;
const selectCategories = state => state.categories.categories;

// Select tasks by category
export const selectTasksByCategory = createSelector(
  [selectTasks, (state, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

// Select completed tasks count
export const selectCompletedTasks = createSelector(
  [selectTasks],
  tasks => tasks.filter(task => task.completed).length
);

// Select category by ID
export const selectCategoryById = createSelector(
  [selectCategories, (state, id) => id],
  (categories, id) => categories.find(category => category.id === id)
);
