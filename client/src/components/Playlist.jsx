import React from 'react';

const Playlist = ({handlePlaylistClick, playlistNames}) => {

  return (
    <div>
      {playlistNames.map((item, index) => {return (
      <div className="playlist-container" key={index} >
        <div className="playlist-icon"><i className="fa-solid fa-music" style={{color: '#ffffff'}}></i></div>
        <div className="playlist-name" onClick={() => {handlePlaylistClick(item)}}>{item}</div>
      </div>
      )})}
    </div>
  )

};

export default Playlist;