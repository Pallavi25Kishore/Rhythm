import React from 'react';
import TrackTile from './TrackTile.jsx';

const TrackList = ({tracks}) => {

return(
<div className="track-list">
{tracks.map((item, index)=> {return <TrackTile track={item} key={index}/>})}
</div>

)
};

export default TrackList;