import React from 'react';
import ArtistTile from './ArtistTile.jsx';

const ArtistList = ({artists, handleArtistClick}) => {
  return (
    <div>
      <div className="home-centerpanel-head">
        <div className="center-head-artists">Artists</div>
      </div>
      <div className="artist-tile-container">
      {artists.map((item, index) => {return <ArtistTile artist={item} key={index} handleArtistClick={handleArtistClick}/>})}
      </div>
    </div>
  )
};

export default ArtistList;