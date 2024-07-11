import React from 'react';

const Playlist = ({handlePlaylistClick, playlistNames, deleteFromPlaylistNames}) => {

  return (
    <div className="playlist-name-rows">
      {playlistNames.map((item, index) => {return (
      <div className="playlist-row" key={index}>
          <div className="playlist-container" key={index} >
            <div className="playlist-icon"><i className="fa-solid fa-music"></i></div>
            <div className="playlist-name" onClick={() => {handlePlaylistClick(item.playlist_name)}}>{item.playlist_name}</div>
          </div>
          <div onClick={()=>{deleteFromPlaylistNames(item.playlist_name)}}><i className="fa-solid fa-trash"></i></div>
      </div>
      )})}
    </div>
  )

};

export default Playlist;