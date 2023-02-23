import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';
import { MyComponent, } from './views/example/MyComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyComponent name="Quoc Duy" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
