import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./GlobalStyles"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);