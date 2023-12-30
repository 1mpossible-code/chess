import TileCSS from'./Tile.module.css';

interface TileProps {
  number: number;
  image?: string;
}

const Tile: React.FC<TileProps> = ({ number, image }) => {
  if (number % 2 === 0) {
    return (
      <div className={`${TileCSS.tile} ${TileCSS.tileblack}`}>
        {image && <div className={TileCSS.piece} style={{backgroundImage: `url(${image})`}}></div>}
      </div>
    );
  } else {
    return (
      <div className={TileCSS.tile}>
        {image && <div className={TileCSS.piece} style={{backgroundImage: `url(${image})`}}></div>}
      </div>
    );
  }
};

export default Tile;

