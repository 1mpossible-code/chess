import React from 'react';
import Tile from "./Tile";
import './Board.css';

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

interface Piece {
  image: string,
  x: number,
  y: number,
}

let pieces: Piece[] = [];

pieces.push({image: "assets/white-pawn.png", x: 0, y: 1})


export default function Board() {
  let board = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < verticalAxis.length; j++) {
      const number = j + i;
      let image = undefined;

      pieces.forEach(p => {
        if (p.x == j && p.y == i) {
          image = p.image
        }
      })

      board.push(<Tile number={number} image={image}></Tile>)
    }
  }
  return <div id="board">{board}</div>
}

