import React from 'react';
import Tile from "./Tile";
import BoardCSS from './Board.module.css';
import Draggable from 'react-draggable';

const horizontalAxis: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
const verticalAxis: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++){
  const type = (p == 0) ? "black" : "white";
  const y = (p === 0 ) ? 7 : 0;

  pieces.push(
    { image: `assets/${type}-rook.png`, x: 7, y: y },
    { image: `assets/${type}-rook.png`, x: 0, y: y },
    { image: `assets/${type}-bishop.png`, x: 2, y: y },
    { image: `assets/${type}-bishop.png`, x: 5, y: y },
    { image: `assets/${type}-knight.png`, x: 1, y: y },
    { image: `assets/${type}-knight.png`, x: 6, y: y },
    { image: `assets/${type}-queen.png`, x: 3, y: y },
    { image: `assets/${type}-king.png`, x: 4, y: y },
  );
}

for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/white-pawn.png", x: i, y: 1 });
}
for (let i = 0; i < 8; i++) {
  pieces.push({ image: "assets/black-pawn.png", x: i, y: 6 });
}


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

      board.push(<Tile key={`${j},${i}`} id={number} image={image}/>);
    }
  }

  return <div className={BoardCSS.board}>{board}</div>;
};

export default Board;

