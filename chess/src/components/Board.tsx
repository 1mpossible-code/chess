import React from 'react';
import Tile from "./Tile";
import './Board.css';

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Board() {
  let board = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < verticalAxis.length; j++) {
      const number = j + i;

      board.push(<Tile number={number}></Tile>)
    }
  }
  return <div id="board">{board}</div>
}

