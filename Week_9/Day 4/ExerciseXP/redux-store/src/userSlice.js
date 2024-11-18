import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        error: null,
        loading: false,
    },
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        fetchUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;

export const fetchUserData = () => async (dispatch) => {
    dispatch(fetchUserStart());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const randomUser = data[Math.floor(Math.random() * data.length)]; // Sélection aléatoire
        dispatch(fetchUserSuccess(randomUser));
    } catch (error) {
        dispatch(fetchUserFailure(error.message));
    }
};
