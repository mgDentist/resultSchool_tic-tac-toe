import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import TicTacToeContainer from './components/ticTacToeContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TicTacToeContainer />
  </React.StrictMode>
);

