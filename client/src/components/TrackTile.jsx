import React from 'react';

const TrackTile = ({track}) => {

return (
  <div className="track-tile">
  <div><img src={track.album.images[2].url} className="track-image"></img></div>
  <div className="track-name">{track.name}</div>
  </div>
)
};

export default TrackTile;