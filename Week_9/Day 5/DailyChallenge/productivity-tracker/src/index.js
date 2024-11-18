import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
