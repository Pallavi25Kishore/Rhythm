import React from 'react';

const Playlist = ({handlePlaylistClick}) => {

  return (
    <div className="playlist-container" onClick={handlePlaylistClick}>
      <div className="playlist-icon"><i className="fa-solid fa-music" style={{color: '#ffffff'}}></i></div>
      <div className="playlist-name">Playlist</div>
    </div>
  )

};

export default Playlist;