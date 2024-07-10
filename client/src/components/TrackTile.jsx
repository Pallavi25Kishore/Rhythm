import React, {useState} from 'react';

const TrackTile = ({track, addToPlaylist, playlist, deleteFromPlaylist, playlistNames}) => {

  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [openPlaylistNamesList, setOpenPlaylistNamesList] = useState(false);
  const audioRef = React.createRef();

  var filteredArr = playlist.filter((item) => {
    if (item.track_id === track.id) {
      return true;
    }
  });

  const handlePlusClick = () => {
    if (filteredArr.length === 0 ) {
       setOpenPlaylistNamesList(true);

    } else {
      deleteFromPlaylist(track.id);
    }
  };

  const handleNameClick =(name) => {
    addToPlaylist(track.id, track.name, track.album.images[2].url, name, track.preview_url);
    setOpenPlaylistNamesList(false);
  };

 const handleAudioToggle = () => {
    if(audioRef.current.paused) {
      audioRef.current.play();
      setCurrentlyPlaying(true);
    } else {
      audioRef.current.pause();
      setCurrentlyPlaying(false);
    }
 };

 const handleOutsideClick = () => {
  if (openPlaylistNamesList) {
    setOpenPlaylistNamesList(false);
  }
 };

return (
  <div className="track-tile" onClick={handleOutsideClick}>
    <div><img src={track.album.images[2].url} className="track-image"></img></div>

    {currentlyPlaying ? <div className="track-name" style={{color: '#5c9d1b'}}>{track.name}</div> : <div className="track-name">{track.name}</div>}

    <div className="plus-sign" onClick={handlePlusClick}> { filteredArr.length > 0 ? <i className="fa-solid fa-circle-check fa-2xl" style={{color: '#5c9d1b'}}></i> : <i className="fa-solid fa-circle-plus fa-2xl" style={{color: '#ffffff', cursor: 'pointer'}}></i> }</div>

    {openPlaylistNamesList ? <div className="playlist-options-list">
        {playlistNames.map((item, index) => { return <div className="playlist-options-list-tile" onClick={() => {handleNameClick(item)}} key={index}>{item}</div>})}
    </div> : null}

    <div className="audio-icon" onClick={handleAudioToggle}>
        {currentlyPlaying ? <i className="fa-solid fa-circle-pause fa-2xl" style={{color: '#5c9d1b'}}></i> : <i className="fa-solid fa-circle-play fa-2xl" style={{color: '#5c9d1b'}}></i>}
    </div>

    <audio ref={audioRef} src={track.preview_url}></audio>

    { currentlyPlaying? <div className="bars">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div> : null }

  </div>
)
};

export default TrackTile;

