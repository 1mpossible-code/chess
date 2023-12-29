import './Tile.css';

interface Props {
  number: number
}

export default function Tile({number}: Props) {
  if (number % 2 == 0) {
    return <div className="tile tile-black"><img src="assets/white-pawn.png"/></div>
  } else {
    return <div className="tile"></div>
  }
}
