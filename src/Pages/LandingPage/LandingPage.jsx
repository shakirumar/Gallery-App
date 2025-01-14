// import React from 'react'

// const LandingPage = () => {
//   return (
//     <div className="welcome-screen">
//         <div className="overlay">
//             <h1 className="tagline">Discover Stunning Visuals</h1>
//             <button className='enter-button'>Explore</button>
//         </div>
//     </div>
//   )
// }

// export default LandingPage


import React from 'react';
import './LandingPage1.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate=useNavigate();

  const handleBtnClick=()=>{
    navigate('/gallery/images')
    
  }
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Your Dream Gallery</h1>
          <p>Discover stunning images and timeless creativity.</p>
          <button className="cta-button1" onClick={()=>handleBtnClick()}>Explore Gallery</button>
        </div>
      </div>

      {/* About Section */}
      {/* <div className="about-section">
        <h2>About Our Gallery</h2>
        <p>
          Step into a world of breathtaking visuals and artistic inspiration. 
          Our gallery showcases the finest collection of images, from serene landscapes to vibrant cityscapes. 
        </p>
      </div> */}
    </div>
  );
};

export default LandingPage;
