import React from 'react';

const ArtistPanel = ({currentArtist}) => {

return (
  <div className="artist-panel">
    <div><img src={currentArtist.image} className="artist-panel-image"></img></div>
    <div className="artist-panel-name">{currentArtist.name}</div>
  </div>
)

}

export default ArtistPanel;