import React from 'react';
import PlaylistPanel from './PlaylistPanel.jsx';
import PlaylistTrackList from './PlaylistTrackList.jsx';

const PlaylistPage = ({playlist, currentPlaylist, deleteFromPlaylist, playlistNames, handleHomeClick}) => {

let playlist_names = playlistNames.map((item)=> { // if playlist page is open and that playlist is deleted from the left panel - instead of displaying no tracks have been added, it should re-direct to home page
  if (item.playlist_name === currentPlaylist) {
    return true;
  }
});

if(playlist_names.length === 0) { // 'currentplaylist' is not a playlist anymore
  handleHomeClick();
}

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