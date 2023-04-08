// Import React library
import React from 'react';
// Import ReactDOM client
import ReactDOM from 'react-dom/client';
// Import App component
import App from './App';
// Import CSS file
import "./style/index.css";

// Create a root element using ReactDOM.createRoot() and select the HTML element with an ID of 'root' as the container
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// Please, reference the README.md for further insight
// HowToCreateReact.md and Resume.PDF are located in the documentation folder
// Thank you for viewing!
// Thomas Calle 😊