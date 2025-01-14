import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to the Image Gallery</h1>
          <p>Explore a world of breathtaking visuals and creative inspiration.</p>
          <button className="explore-button">Explore Gallery</button>
        </div>
      </div>
      <div className="gallery-preview">
        <h2>Featured Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Item 1" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Item 2" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Item 3" />
          </div>
          <div className="gallery-item">
            <img src="https://via.placeholder.com/300x200" alt="Gallery Item 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


