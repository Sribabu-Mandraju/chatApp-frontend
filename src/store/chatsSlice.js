// src/features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';


export const fetchConversations = createAsyncThunk(
  'data/fetchConversations',
  async () => {
    const user = useSelector((state)=>state.auth.user)
    console.log("user :",user)
    const response = await axios.get(`http://localhost:3000/msg/getChats/${user._id}`); // Replace with your API endpoint
    return response.data;
  }
);

const dataSlice = createSlice({
  name: 'chat',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchConversations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default dataSlice.reducer;
