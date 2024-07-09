import React from 'react';
import ArtistPanel from './ArtistPanel.jsx';
import TrackList from './TrackList.jsx';

const TracksPage = ({tracks, currentArtist}) => {

return (
  <div className="tracks-page">
    <ArtistPanel currentArtist={currentArtist}/>
    <TrackList tracks={tracks}/>
  </div>
)
};

export default TracksPage;