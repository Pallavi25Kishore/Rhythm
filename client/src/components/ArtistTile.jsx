import React, {useState} from 'react';

const ArtistTile = ({artist, handleArtistClick}) => {

const [isHover, setIsHover] = useState(false);

const handleClick = () => {
  handleArtistClick(artist.id, artist.name, artist.images[1].url);
};

const handleMouseEnter = () => {
  setIsHover(true);
};

const handleMouseLeave = () => {
  setIsHover(false);
};

return (
  <div className="artist-tile" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <div className="artist-image-tile"><img src={artist.images[2].url} className="artist-image"></img></div>
    <div className="artist-name-tile">{artist.name}</div>
   {isHover === true ? <div className="artist-tile-play-logo"><i className="fa-solid fa-circle-play fa-2xl" style={{color: '#5c9d1b'}}></i></div>: null}

  </div>
)
};

export default ArtistTile;