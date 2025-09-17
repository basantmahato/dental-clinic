import React from 'react';
import './AboutUsSection.css'; 


const doctorImage = './profile.png'; 

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="doctor-card-container">
        <div className="doctor-card">
          <img src={doctorImage} alt="" className="doctor-image" />
          <div className="doctor-info-overlay">
            <div className="doctor-details">
              {}
              <img src="caduceus.jpg" alt="Medical Icon" className="medical-icon" />
              <div>
                <h3>Dr. Ujjwal </h3>
                <p className="doctor-title">Dental Surgeon (BDS)</p>
                <p className="clinic-name">Dr.Ujjwal's
DENTAL CARE</p>
              </div>
            </div>
            <p className="care-message">We care about your teeth. Book a free consultation today</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <p className="about-tagline">ABOUT US</p>
        <h2 className="about-headline">Discover the Trusted Team Behind Smile Zone Dental Clinic</h2>
        <p className="about-description">
           Dental Clinic, Dr. Ujjwal and his skilled team provide
          exceptional dental care, ensuring patient comfort and satisfaction.
        </p>
        <button className="read-more-button">READ MORE</button>
      </div>
    </div>
  );
};

export default AboutUsSection;