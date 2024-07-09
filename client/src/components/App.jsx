import React , {useState, useEffect} from 'react';
import axios from 'axios';
import ArtistList from './ArtistList.jsx';

const App = () => {

  const [artists, setArtists] = useState([]);

useEffect(()=> {
  axios.get('/artists')
  .then((response) => {
      console.log(response);
      setArtists(response.data);
  })
  .catch((err) => {
    console.log("error in fetching artists data");
  });

}, []);

  return (
  <div className="outer-container">
    <div className="left-panel">
        <div className="left-upper-panel">
        </div>
        <div className="left-lower-panel"></div>
    </div>
    <div className="center-panel">
        <ArtistList artists={artists}/>
    </div>
  </div>
  )
};

export default App;