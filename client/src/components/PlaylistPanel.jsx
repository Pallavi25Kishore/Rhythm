import React from 'react';

const PlaylistPanel = ({currentPlaylist}) => {

return (
  <div className="playlist-panel">
    <div className="playlist-panel-name">{currentPlaylist}</div>
  </div>
)

}

export default PlaylistPanel;