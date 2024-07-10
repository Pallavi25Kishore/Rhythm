import React from 'react';

const PlaylistPage = ({playlist}) => {

return (
  <div>
   {playlist.map((item) => {return <div>{item.track_name}</div>})}
  </div>
)
};

export default PlaylistPage;