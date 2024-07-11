import React, {useState} from 'react';
import ArtistTile from './ArtistTile.jsx';

const ArtistList = ({artists, handleArtistClick, openSearchBar, handleBackClick}) => {

  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  let filteredArtists;
  if (value === '') {
    filteredArtists = artists
  } else {
    filteredArtists = artists.filter((artist) => {
      if (artist.name.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }
    });
  }

  const handleFbClick = () => {
     // opening tab for sptify's account on social media since rhythm does not have an account yet
     window.open('https://www.facebook.com/Spotify', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://x.com/spotify', '_blank');
  };

  const handleInstaClick = () => {

    window.open('https://www.instagram.com/spotify/', '_blank');
  };

  return (
    <div>
      <div className="home-centerpanel-head">
        {openSearchBar === false? <div className="center-head-artists">Artists</div> :
          <div className="search-setup">
            <div className="search-back-button" onClick={handleBackClick}><i className="fa-solid fa-circle-chevron-left fa-2xl"></i></div>
            <form className="form"><input className="form-input" type="text" name="search" value={value} placeholder="Which artist do you want to listen to?" onChange={handleOnChange}></input></form> </div>}

              <div className="social-media-icons">
              <div className="fb" onClick={handleFbClick}><i className="fa-brands fa-facebook fa-xl" ></i></div>
              <div className="twitter" onClick={handleTwitterClick}><i className="fa-brands fa-twitter fa-xl" ></i></div>
              <div className="insta" onClick={handleInstaClick}><i className="fa-brands fa-instagram fa-xl" ></i></div>
              </div>
            </div>

      <div className="artist-tile-container">
      {filteredArtists.map((item, index) => {return <ArtistTile artist={item} key={index} handleArtistClick={handleArtistClick}/>})}
      </div>
    </div>
  )
};

export default ArtistList;


