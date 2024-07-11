import React from 'react';

const Home = ({handleHomeClick, homeOpen, handleSideSearchClick}) => {

  return (
    <div className="home-and-search">
    <div className="home-container" onClick={handleHomeClick}>
      <div className="home-icon">
        {homeOpen ? <i className="fa-solid fa-house fa-2xl" style={{color: '#ffffff'}}></i> : <i className="fa-solid fa-house-user fa-2xl" style={{color: 'rgba(255, 255, 255, 0.3)'}}></i>}
      </div>
      {homeOpen ? <div className="home1" style={{color: '#ffffff'}}>Home</div> : <div className="home2" style={{color: 'rgba(255, 255, 255, 0.3)'}}>Home</div> }
    </div>

    <div className="side-search-container">
      <div className="side-search-icon">
       <i className="fa-solid fa-magnifying-glass fa-2xl" ></i>
      </div>
      <div className="side-search" onClick={handleSideSearchClick}>Search</div>
    </div>

    </div>

  )

};

export default Home;