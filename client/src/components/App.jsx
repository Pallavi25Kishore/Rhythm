import React , {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistList from './ArtistList.jsx';
import Home from './Home.jsx';
import TracksPage from './TracksPage.jsx';

const App = () => {

  const [artists, setArtists] = useState([]);
  const [homeOpen, setHomeOpen] = useState(true);
  const [tracks, setTracks] = useState([]);

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


const handleHomeClick = () => {
  if (!homeOpen) {
    setHomeOpen(true);
  }
}

const handleArtistClick = (id) => {
  console.log("test1", id);
  axios.get(`/tracks/${id}`)
  .then((response) => {
    console.log("tracks", response);
    setTracks(response.data[0].tracks);
    setHomeOpen(false);
})
.catch((err) => {
  console.log("error in fetching tracks data");
});
};

  return (
  <div className="outer-container">
    <div className="left-panel">
        <div className="left-upper-panel">
          <Home handleHomeClick={handleHomeClick} homeOpen={homeOpen}/>
        </div>
        <div className="left-lower-panel"></div>
    </div>
    <div className="center-panel">
        {homeOpen ? <ArtistList artists={artists} handleArtistClick={handleArtistClick}/> :
        (tracks ? <TracksPage tracks={tracks}/> : null)}
    </div>
  </div>
  )
};

export default App;