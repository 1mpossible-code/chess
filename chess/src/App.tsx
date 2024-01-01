import React from 'react';
import AppCSS from './App.module.css';
import Board from './components/Board';

const ChessApp = () => {
  return (
    <div className={AppCSS.app}>
      <Board />
    </div>
  );
};

export default ChessApp;
