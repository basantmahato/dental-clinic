import React from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  const whatsappNumber = ""; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="hero-section">
      <div className="hero-content-left">
        <p className="hero-tagline">YOUR SMILE,</p>
        <h1 className="hero-title">The Best Dental Care in Jamshedpur</h1>
      </div>
      <div className="hero-content-right">
        <p className="hero-description">
          Expert dental services tailored to maintain your beautiful smile
          in a comfortable environment.
        </p>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="book-now-button"
        >
          Book Now <span className="phone-icon">📞</span> {}
        </a>
      </div>
    </div>
  );
};

export default HeroSection;