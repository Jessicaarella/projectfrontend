import React from 'react';
import ReactDOM from 'react-dom'; // nge-render file JS ke bentuk HTML
import { BrowserRouter } from "react-router-dom"; // ini biar bisa pindah ke halaman lain (router)
import './index.css'; // nge-load file index.css untuk styling halaman web
import App from './App'; // nge-load file App.js

// ini kita diminta untuk nge render Halaman App.js
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);