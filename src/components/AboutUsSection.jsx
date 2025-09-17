import React from 'react';
import './AboutUsSection.css'; // Make sure to create this CSS file

// Placeholder image for the doctor.
// In a real project, you would import it like:
// import doctorImage from './path/to/dr-anjali.jpg';
const doctorImage = './profile.png'; // Replace with the actual image path

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="doctor-card-container">
        <div className="doctor-card">
          <img src={doctorImage} alt="Dr. Kumari Anjali" className="doctor-image" />
          <div className="doctor-info-overlay">
            <div className="doctor-details">
              {/* Assuming you have a medical caduceus icon or similar */}
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Caduceus.svg/1200px-Caduceus.svg.png" alt="Medical Icon" className="medical-icon" />
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