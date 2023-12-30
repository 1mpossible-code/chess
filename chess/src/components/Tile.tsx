import tileStyle from'./Tile.module.css';

interface TileProps {
  id: number;
  image?: string;
}

const Tile: React.FC<TileProps> = ({ id, image }) => {
  if (id % 2 === 0) {
    return (
      <div className={`${tileStyle.tile} ${tileStyle.tileblack}`}>
        {image && <div className={tileStyle.piece} style={{backgroundImage: `url(${image})`}}></div>}
      </div>
    );
  } else {
    return (
      <div className={tileStyle.tile}>
        {image && <div className={tileStyle.piece} style={{backgroundImage: `url(${image})`}}></div>}
      </div>
    );
  }
};

export default Tile;

