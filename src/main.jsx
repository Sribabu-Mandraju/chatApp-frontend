// src/main.jsx or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoadingProvider } from './LoadingContext';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <LoadingProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </LoadingProvider>
        </React.StrictMode>
    </PersistGate>
  </Provider>
);
