import React from 'react';
import './Board.css';

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Board() {
  let board = [];

  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < verticalAxis.length; j ++) {
      board.push(<div>{horizontalAxis[i]}{verticalAxis[j]}</div>)
    }
  }
  return <div id="board">{board}</div>
}

