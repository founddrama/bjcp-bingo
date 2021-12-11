import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from 'bingo-board';
import phrases from './phrases/bingo-phrases';
import './style/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Bingo phrases={phrases} />
  </React.StrictMode>,
  document.getElementById('root')
);
