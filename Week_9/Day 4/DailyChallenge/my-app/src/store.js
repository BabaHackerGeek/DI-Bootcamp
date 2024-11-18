import { configureStore } from '@reduxjs/toolkit';
import ageReducer from './ageSlice.jsx';

const store = configureStore({
    reducer: {
        age: ageReducer,
    },
});

export default store;
