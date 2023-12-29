import React from 'react';
import Tile from "./Tile";
import BoardCSS from './Board.module.css';

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H"]
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

interface Piece {
  image: string,
  x: number,
  y: number,
}

let pieces: Piece[] = [];

for(let i = 0; i < 8; i++) {
  pieces.push({image: "assets/white-pawn.png", x: i, y: 1})
}
for(let i = 0; i < 8; i++) {
  pieces.push({image: "assets/black-pawn.png", x: i, y: 6})
}

pieces.push({image: "assets/black-rook.png", x: 7, y: 7})
pieces.push({image: "assets/black-rook.png", x: 0, y: 7})
pieces.push({image: "assets/black-bishop.png", x: 2, y: 7})
pieces.push({image: "assets/black-bishop.png", x: 5, y: 7})
pieces.push({image: "assets/black-knight.png", x: 1, y: 7})
pieces.push({image: "assets/black-knight.png", x: 6, y: 7})
pieces.push({image: "assets/black-queen.png", x: 3, y: 7})
pieces.push({image: "assets/black-king.png", x: 4, y: 7})

pieces.push({image: "assets/white-rook.png", x: 7, y: 0})
pieces.push({image: "assets/white-rook.png", x: 0, y: 0})
pieces.push({image: "assets/white-bishop.png", x: 2, y: 0})
pieces.push({image: "assets/white-bishop.png", x: 5, y: 0})
pieces.push({image: "assets/white-knight.png", x: 1, y: 0})
pieces.push({image: "assets/white-knight.png", x: 6, y: 0})
pieces.push({image: "assets/white-queen.png", x: 3, y: 0})
pieces.push({image: "assets/white-king.png", x: 4, y: 0})

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
  return <div id={BoardCSS.board}>{board}</div>
}

