import React, {useState} from 'react';

const AddPlaylist = ({playlistNames, addToPlaylistNames}) => {

  const handleAddPlaylist = () => {
      let name = prompt('Add New Playlist').trim();
      let repeatedNameArr = playlistNames.filter((item)=> {
        if (name === item.playlist_name) {
          return true;
        }
      });

      if (repeatedNameArr.length > 0) {
        name = prompt(`${name} playlist name already exists, enter new name!`).trim();
      }

      if (name !== '') {
        addToPlaylistNames(name);
      }
  };

return (
<div className="add-playlist-container">
   <div className="add-playlist" onClick={handleAddPlaylist}>Playlist + </div>
</div>

)
};

export default AddPlaylist;