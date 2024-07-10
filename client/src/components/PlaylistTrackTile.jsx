import React, {useState} from 'react';

const PlaylistTrackTile = ({track, deleteFromPlaylist}) => {

  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const audioRef = React.createRef();


  const handleDeleteClick = () => {
    deleteFromPlaylist(track.track_id);
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
  <div className="track-tile">
    <div><img src={track.track_image} className="track-image"></img></div>

    {currentlyPlaying ? <div className="track-name" style={{color: '#5c9d1b'}}>{track.track_name}</div> : <div className="track-name">{track.track_name}</div>}

    <div className="plus-sign" onClick={handleDeleteClick}><i className="fa-solid fa-circle-minus fa-2xl" style={{color: '#ffffff'}}></i> </div>

    <div className="audio-icon" onClick={handleAudioToggle}>
        {currentlyPlaying ? <i className="fa-solid fa-circle-pause fa-2xl" style={{color: '#5c9d1b'}}></i> : <i className="fa-solid fa-circle-play fa-2xl" style={{color: '#5c9d1b'}}></i>}
    </div>

    <audio ref={audioRef} src={track.track_preview_url}></audio>

    { currentlyPlaying? <div className="bars">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      </div> : null
    }
  </div>
)
};

export default PlaylistTrackTile;