import React from 'react';

const ArtistTile = ({artist}) => {


return (
  <div className="artist-tile">
    <div className="artist-image-tile"><img src={artist.images[2].url} className="artist-image"></img></div>
    <div className="artist-name-tile">{artist.name}</div>
  </div>
)
};

export default ArtistTile;