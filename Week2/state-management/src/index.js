import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MovieProvider} from "./Components/MovieProvider"
import "./index.css"

ReactDOM.render(
  <MovieProvider>
    <App />
  </MovieProvider>,
  document.getElementById('root')
)