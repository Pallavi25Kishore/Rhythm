import React from 'react';

const PlaylistPanel = ({currentPlaylist}) => {

return (
  <div className="artist-panel">
    <div className="artist-panel-name">{currentPlaylist}</div>
  </div>
)

}

export default PlaylistPanel;