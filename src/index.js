import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/animate.min.css';
import './assets/styles/boxicons.min.css';
import './assets/styles/flaticon.css';
import './assets/styles/magnific-popup.min.css';
import './assets/styles/meanmenu.min.css';
import './assets/styles/nice-select.min.css';
import './assets/styles/odometer.min.css';
import './assets/styles/owl.carousel.min.css';
import './assets/styles/owl.theme.default.min.css';
import './assets/styles/responsive.css';
import './assets/styles/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
