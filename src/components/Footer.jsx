import React from 'react';
import './Footer.css'; // Don't forget to create this CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <p className="call-today-label">Call Today</p>
          <p className="phone-number">09308510513</p>
        </div>

        <div className="location-info">
          <div className="location-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="map-pin">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <p className="address-text">
            Dr Ujjwals Dental Care, Usha Complex, Shiv Path, opposite Dominos, Uliyan, Kadma, Jamshedpur, Jharkhand 831005
          </p>
        </div>

        <div className="virtual-appointment">
          <p className="virtual-label">Schedule a Virtual Appointment</p>
          <button className="reserve-button">Reserve a Slot</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;