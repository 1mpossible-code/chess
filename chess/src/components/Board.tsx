import React from 'react';
import Tile from "./Tile";
import BoardCSS from './Board.module.css';

const horizontalAxis: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/white-pawn.png", x: i, y: 1 });
}
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/black-pawn.png", x: i, y: 6 });
}

pieces.push(
  { image: "assets/black-rook.png", x: 7, y: 7 },
  { image: "assets/black-rook.png", x: 0, y: 7 },
  { image: "assets/black-bishop.png", x: 2, y: 7 },
  { image: "assets/black-bishop.png", x: 5, y: 7 },
  { image: "assets/black-knight.png", x: 1, y: 7 },
  { image: "assets/black-knight.png", x: 6, y: 7 },
  { image: "assets/black-queen.png", x: 3, y: 7 },
  { image: "assets/black-king.png", x: 4, y: 7 },
  { image: "assets/white-rook.png", x: 7, y: 0 },
  { image: "assets/white-rook.png", x: 0, y: 0 },
  { image: "assets/white-bishop.png", x: 2, y: 0 },
  { image: "assets/white-bishop.png", x: 5, y: 0 },
  { image: "assets/white-knight.png", x: 1, y: 0 },
  { image: "assets/white-knight.png", x: 6, y: 0 },
  { image: "assets/white-queen.png", x: 3, y: 0 },
  { image: "assets/white-king.png", x: 4, y: 0 }
);

const Board: React.FC = () => {
  const board: JSX.Element[] = [];

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < verticalAxis.length; j++) {
      const number = j + i;
      let image: string | undefined = undefined;

      pieces.forEach(p => {
        if (p.x === j && p.y === i) {
          image = p.image;
        }
      });

      board.push(<Tile key={`${j},${i}`} number={number} image={image} />);
    }
  }

  return <div className={BoardCSS.board}>{board}</div>;
};

export default Board;

