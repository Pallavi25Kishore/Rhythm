import React from 'react';
import TrackTile from './TrackTile.jsx';

const TrackList = ({tracks, addToPlaylist, playlist, deleteFromPlaylist, playlistNames}) => {

return(
<div className="track-list">
{tracks.map((item, index)=> {return <TrackTile track={item} key={index} addToPlaylist={addToPlaylist} playlist={playlist} deleteFromPlaylist={deleteFromPlaylist} playlistNames={playlistNames}/>})}
</div>

)
};

export default TrackList;