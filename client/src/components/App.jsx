import React , {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistList from './ArtistList.jsx';
import Home from './Home.jsx';
import TracksPage from './TracksPage.jsx';
import Playlist from './Playlist.jsx';
import PlaylistPage from './PlaylistPage.jsx';
import AddPlaylist from './AddPlaylist.jsx';

const App = () => {

  const [artists, setArtists] = useState([]);
  const [homeOpen, setHomeOpen] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [currentArtist, setCurrentArtist] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [playlistNames, setPlaylistNames] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState('');
  const [openSearchBar, setOpenSearchBar] = useState(false);

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

useEffect(()=> {
  getPlaylistNames();
}, []);

const handleHomeClick = () => {
  if (!homeOpen) {
    setHomeOpen(true);
    setPlaylistOpen(false);
  }
};

const handlePlaylistClick = (text) => {
    setHomeOpen(false);
    setPlaylistOpen(true);
    setCurrentPlaylist(text);
}

const handleArtistClick = (id, name, image) => {
  axios.get(`/tracks/${id}`)
  .then((response) => {
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
    setPlaylist(response.data);
  })
  .catch((err) => {
    console.log("error in fetching playlist data");
  });
};


const addToPlaylist = (track_id, track_name, track_image, track_playlist, track_preview_url) => {
    axios.post('/playlist', {track_id: track_id, track_name: track_name, track_image: track_image, track_playlist : track_playlist, track_preview_url: track_preview_url})
    .then((response) => {
      getPlaylist();
    })
    .catch((err) => {
      console.log("error in posting track to playlist");
    });
};

const deleteFromPlaylist = (id) => {
  axios.delete(`/playlist/${id}`)
  .then((response) => {
    getPlaylist();
  })
  .catch((err) => {
    console.log("error in deleting track to playlist");
  });
};


const getPlaylistNames = () => {
  axios.get('/playlist/name')
  .then((response) => {
    setPlaylistNames(response.data);
  })
  .catch((err) => {
    console.log("error in fetching playlist names");
  });
};


const addToPlaylistNames = (name) => {
    axios.post('/playlist/name', {playlist_name: name})
    .then((response) => {
      getPlaylistNames();
    })
    .catch((err) => {
      console.log("error in posting playlist name");
    });
};

const deleteFromPlaylistNames = (name) => {
  axios.delete(`/playlist/name/${name}`)
  .then((response) => {
    return axios.get('/playlist/name')
  })
  .then((response) => {
    setPlaylistNames(response.data);
    return axios.delete(`/playlist/tracks/${name}`)
  })
  .then(() => {
    getPlaylist();
  })
  .catch((err) => {
    console.log("error in deleting playlist name");
  });
};

const handleSideSearchClick = () => {
     setOpenSearchBar(true);
}

const handleBackClick = () => {
  setOpenSearchBar(false);
}

  return (
  <div className="outer-container">
    <div className="left-panel">
        <div className="left-upper-panel">
          <Home handleHomeClick={handleHomeClick} homeOpen={homeOpen} handleSideSearchClick={handleSideSearchClick}/>
        </div>
        <div className="left-lower-panel">
          <AddPlaylist playlistNames={playlistNames} addToPlaylistNames={addToPlaylistNames}/>
          {playlistNames.length > 0 ? <Playlist handlePlaylistClick={handlePlaylistClick} playlistNames={playlistNames} deleteFromPlaylistNames={deleteFromPlaylistNames}/> : null}
        </div>
    </div>
    <div className="center-panel">
        {homeOpen ?
          <ArtistList artists={artists} handleArtistClick={handleArtistClick} openSearchBar={openSearchBar} handleBackClick={handleBackClick}/> :
             (playlistOpen ?
                <PlaylistPage playlist={playlist} currentPlaylist={currentPlaylist} deleteFromPlaylist={deleteFromPlaylist} playlistNames={playlistNames} handleHomeClick={handleHomeClick}/> :
                     (tracks ?
                          <TracksPage tracks={tracks} currentArtist={currentArtist} addToPlaylist={addToPlaylist} playlist={playlist} deleteFromPlaylist={deleteFromPlaylist} playlistNames = {playlistNames}/> :
                               null))}
    </div>
  </div>
  )
};

export default App;