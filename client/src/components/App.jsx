import React , {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistList from './ArtistList.jsx';
import Home from './Home.jsx';
import TracksPage from './TracksPage.jsx';
import Playlist from './Playlist.jsx';
import PlaylistPage from './PlaylistPage.jsx';

const App = () => {

  const [artists, setArtists] = useState([]);
  const [homeOpen, setHomeOpen] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [currentArtist, setCurrentArtist] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [playlistOpen, setPlaylistOpen] = useState(false);

useEffect(()=> {
  axios.get('/artists')
  .then((response) => {
      console.log("artists", response);
      setArtists(response.data);
  })
  .catch((err) => {
    console.log("error in fetching artists data");
  });

}, []);

useEffect(()=> {
  getPlaylist();
}, []);


const handleHomeClick = () => {
  if (!homeOpen) {
    setHomeOpen(true);
    setPlaylistOpen(false);
  }
};

const handlePlaylistClick = () => {
    setHomeOpen(false);
    setPlaylistOpen(true);
}

const handleArtistClick = (id, name, image) => {
  console.log("test1", id, name, image);
  axios.get(`/tracks/${id}`)
  .then((response) => {
    console.log("tracks", response);
    setTracks(response.data[0].tracks);
    setHomeOpen(false);
    setCurrentArtist({id: id, name: name, image: image});
})
.catch((err) => {
  console.log("error in fetching tracks data");
});
};

const getPlaylist = () => {
  axios.get('/playlist')
  .then((response) => {
    console.log("playlist data", response.data);
    setPlaylist(response.data);
  })
  .catch((err) => {
    console.log("error in fetching playlist data");
  });
};


const addToPlaylist = (track_id, track_name, track_image) => {
    axios.post('/playlist', {track_id: track_id, track_name: track_name, track_image: track_image})
    .then((response) => {
      console.log(response);
      getPlaylist();
    })
    .catch((err) => {
      console.log("error in posting track to playlist");
    });
};

const deleteFromPlaylist = (id) => {
  axios.delete(`/playlist/${id}`)
  .then((response) => {
    console.log(response);
    getPlaylist();
  })
  .catch((err) => {
    console.log("error in deleting track to playlist");
  });
};

  return (
  <div className="outer-container">
    <div className="left-panel">
        <div className="left-upper-panel">
          <Home handleHomeClick={handleHomeClick} homeOpen={homeOpen}/>
        </div>
        <div className="left-lower-panel">
          {playlist ? <Playlist handlePlaylistClick={handlePlaylistClick}/> : null}
        </div>
    </div>
    <div className="center-panel">
        {homeOpen ? <ArtistList artists={artists} handleArtistClick={handleArtistClick}/> :
        (playlistOpen ? <PlaylistPage playlist={playlist}/> : (tracks ? <TracksPage tracks={tracks} currentArtist={currentArtist} addToPlaylist={addToPlaylist} playlist={playlist} deleteFromPlaylist={deleteFromPlaylist}/> : null))}
    </div>
  </div>
  )
};

export default App;