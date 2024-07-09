import React from 'react';
import ArtistTile from './ArtistTile.jsx';

const ArtistList = ({artists, handleArtistClick}) => {
  return (
    <div className="artist-tile-container">
    {artists.map((item, index) => {return <ArtistTile artist={item} key={index} handleArtistClick={handleArtistClick}/>})}
    </div>
  )
};

export default ArtistList;