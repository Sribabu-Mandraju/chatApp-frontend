// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from './authSlice';


// Async thunk action for fetching data
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3000/msg/getChats/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch data');
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectData = (state) => state.data.data;
export const selectIsLoading = (state) => state.data.isLoading;
export const selectError = (state) => state.data.error;

export default dataSlice.reducer;
