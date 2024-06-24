import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.token;

// Async thunk action for login
export const loginUser = (data) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axios.post('http://localhost:3000/signin', data);
    dispatch(loginSuccess({ user: response.data, token: response.data.token }));
  } catch (error) {
    dispatch(loginFail(error.response?.data?.message || 'Login failed'));
  }
};

export default authSlice.reducer;
