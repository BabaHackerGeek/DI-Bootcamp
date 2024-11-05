import { createStore } from 'redux';
import taskReducer from './reducers/taskReducer';

const initialState = {
  tasksByDay: {}  
};

const store = createStore(taskReducer, initialState);

export default store;
