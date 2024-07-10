import React from 'react';
import PlaylistTrackTile from './PlaylistTrackTile.jsx';

const PlaylistTrackList = ({tracks, deleteFromPlaylist, currentPlaylist}) => {

if (tracks.length === 0) {
  return <div style={{fontSize: '20px'}}>{`No tracks have been added to ${currentPlaylist} playlist yet!`}</div>
}

return(
<div className="track-list">
{tracks.map((item, index)=> {return <PlaylistTrackTile track={item} key={index} deleteFromPlaylist={deleteFromPlaylist}/>})}
</div>

)
};

export default PlaylistTrackList;