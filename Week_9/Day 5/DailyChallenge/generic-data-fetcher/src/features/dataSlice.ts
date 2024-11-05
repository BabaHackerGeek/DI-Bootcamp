import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../api/api';
import { Recipe, ApiResponse } from '../types/types';

interface DataState {
  data: Recipe[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: [],
  status: 'idle',
  error: null,
};

// Get the API key from the environment variables
const API_KEY = process.env.REACT_APP_API_KEY;

// Thunk to fetch recipes
export const fetchRecipes = createAsyncThunk('data/fetchRecipes', async () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`;
  const data = await fetchData<ApiResponse<Recipe>>(url);
  return data.results;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default dataSlice.reducer;
