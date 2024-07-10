import React, {useState} from 'react';

const TrackTile = ({track, addToPlaylist}) => {

  const [showPlus, setShowPlus] = useState(false);

  const handleMouseEnter= () => {
    setShowPlus(true);
  };

  const handleMouseLeave= () => {
    setShowPlus(false);
  };

  const handlePlusClick = () => {
    addToPlaylist(track.id, track.name, track.album.images[2].url);
  }

return (
  <div className="track-tile" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
  <div><img src={track.album.images[2].url} className="track-image"></img></div>
  <div className="track-name">{track.name}</div>
      {showPlus ?
      <div className="plus-sign" onClick={handlePlusClick}><i className="fa-solid fa-circle-plus" style={{color: '#ffffff'}}></i></div> : null}
  </div>
)
};

export default TrackTile;

//<i class="fa-solid fa-circle-check" style="color: #61b71a;"></i>