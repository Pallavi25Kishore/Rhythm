import React from 'react';
import TrackTile from './TrackTile.jsx';

const TrackList = ({tracks, addToPlaylist}) => {

return(
<div className="track-list">
{tracks.map((item, index)=> {return <TrackTile track={item} key={index} addToPlaylist={addToPlaylist}/>})}
</div>

)
};

export default TrackList;