import React from 'react';
import ReactDOM from 'react-dom';
import Bingo from 'bingo-board';
import phrases from './phrases/bingo-phrases';
import getOrCreateBoardSeed from './utils/board-seed';
import './style/index.css';

const seed = getOrCreateBoardSeed();

ReactDOM.render(
  <React.StrictMode>
    <Bingo phrases={phrases} seed={seed} />
  </React.StrictMode>,
  document.getElementById('root')
);
