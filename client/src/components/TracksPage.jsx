import React from 'react';
// import ArtistPanel from ArtistPanel.jsx;
import TrackList from './TrackList.jsx';

const TracksPage = ({tracks}) => {

return (
  <div className="tracks-page">
    {/* <ArtistPanel /> */}
    <TrackList tracks={tracks}/>
  </div>
)
};

export default TracksPage;