import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from '../api/api';
import { ApiResponse, Recipe } from '../types/types';

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

export const fetchRecipes = createAsyncThunk<Recipe[]>('data/fetchRecipes', async () => {
  const url = 'https://api.spoonacular.com/recipes/complexSearch';
  const response = await fetchData<ApiResponse<Recipe>>(url);
  return response.results;
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
      .addCase(fetchRecipes.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
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
