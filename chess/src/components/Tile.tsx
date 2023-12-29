import TileCSS from'./Tile.module.css';

interface Props {
  number: number,
  image?: string,
}

export default function Tile({number, image}: Props) {
  if (number % 2 == 0) {
    return <div className={`${TileCSS.tile} ${TileCSS.tileblack}`}><img src={image}/></div>
  } else {
    return <div className={TileCSS.tile}><img src={image}/></div>
  }
}
