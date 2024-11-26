import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Link your CSS file here
import App from './App'; // Your main App component

// Rendering the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure your public/index.html has a <div id="root"></div>
);
