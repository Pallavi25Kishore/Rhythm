import React from 'react';
import ArtistTile from './ArtistTile.jsx';

const ArtistList = ({artists}) => {
  return (
    <div className="artist-tile-container">
    {artists.map((item, index) => {return <ArtistTile artist={item} key={index}/>})}
    </div>
  )
};

export default ArtistList;