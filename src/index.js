import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

window.API_BASE_URL = `http://125.6.38.124`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
