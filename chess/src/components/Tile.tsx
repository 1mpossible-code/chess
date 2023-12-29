import './Tile.css';

interface Props {
  number: number
}

export default function Tile({number}: Props) {
  if (number % 2 == 0) {
    return <div className="tile tile-black">test</div>
  } else {
    return <div className="tile">test</div>
  }
}
