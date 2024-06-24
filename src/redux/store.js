// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import usersReducer from './conversationSlice';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist the auth reducer
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    data: usersReducer,
  },
});

export const persistor = persistStore(store);

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
