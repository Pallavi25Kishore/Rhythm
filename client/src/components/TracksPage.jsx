import React from 'react';
import ArtistPanel from './ArtistPanel.jsx';
import TrackList from './TrackList.jsx';

const TracksPage = ({tracks, currentArtist, addToPlaylist}) => {

return (
  <div className="tracks-page">
    <ArtistPanel currentArtist={currentArtist}/>
    <TrackList tracks={tracks} addToPlaylist={addToPlaylist}/>
  </div>
)
};

export default TracksPage;