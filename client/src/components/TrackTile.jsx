import React, {useState} from 'react';

const TrackTile = ({track, addToPlaylist, playlist, deleteFromPlaylist}) => {

  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const audioRef = React.createRef();

  var filteredArr = playlist.filter((item) => {
    if (item.track_id === track.id) {
      return true;
    }
  });

  const handlePlusClick = () => {
    if (filteredArr.length === 0 ) {
      addToPlaylist(track.id, track.name, track.album.images[2].url);
    } else {
      deleteFromPlaylist(track.id);
    }
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

return (
  <div className="track-tile" >
    <div><img src={track.album.images[2].url} className="track-image"></img></div>

    {currentlyPlaying ? <div className="track-name" style={{color: '#5c9d1b'}}>{track.name}</div> : <div className="track-name">{track.name}</div>}

    <div className="plus-sign" onClick={handlePlusClick}> { filteredArr.length > 0 ? <i className="fa-solid fa-circle-check" style={{color: '#5c9d1b'}}></i> : <i className="fa-solid fa-circle-plus" style={{color: '#ffffff'}}></i> }</div>

    <div className="audio-icon" onClick={handleAudioToggle}>
        {currentlyPlaying ? <i className="fa-solid fa-circle-pause" style={{color: '#5c9d1b'}}></i> : <i className="fa-solid fa-circle-play" style={{color: '#5c9d1b'}}></i>}
    </div>

    <audio ref={audioRef} src={track.preview_url}></audio>

  </div>
)
};

export default TrackTile;

