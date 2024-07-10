import React from 'react';
import PlaylistPanel from './PlaylistPanel.jsx';
import PlaylistTrackList from './PlaylistTrackList.jsx';

const PlaylistPage = ({playlist, currentPlaylist, deleteFromPlaylist}) => {

let tracks = playlist.filter((item) => {
      if (item.track_playlist === currentPlaylist) {
        return true;
      }
});

return (
  <div className="tracks-page">
    <PlaylistPanel currentPlaylist={currentPlaylist}/>
    <PlaylistTrackList tracks={tracks}  deleteFromPlaylist={deleteFromPlaylist} currentPlaylist={currentPlaylist}/>
  </div>
)
};

export default PlaylistPage;