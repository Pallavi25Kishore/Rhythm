import React from 'react';
import ArtistPanel from './ArtistPanel.jsx';
import TrackList from './TrackList.jsx';

const TracksPage = ({tracks, currentArtist, addToPlaylist, playlist, deleteFromPlaylist}) => {

return (
  <div className="tracks-page">
    <ArtistPanel currentArtist={currentArtist}/>
    <TrackList tracks={tracks} addToPlaylist={addToPlaylist} playlist={playlist} deleteFromPlaylist={deleteFromPlaylist}/>
  </div>
)
};

export default TracksPage;