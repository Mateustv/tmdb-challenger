import React from 'react';
import ReactDOM from 'react-dom';
import { MovieProvider } from './context/MovieContext';
import HomePage from './pages/HomePage';

import './styles/global.scss';


ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <HomePage />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
