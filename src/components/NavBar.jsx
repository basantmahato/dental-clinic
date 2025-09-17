import React, { useState } from 'react';
import './NavBar.css'; // Don't forget to create this CSS file
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Placeholder for your actual logo image */}
        <div className="logo-container">
          {/* You might replace this div with an <img> tag pointing to your logo */}
          {/* Example: <img src="/path/to/your/logo.png" alt="Smile Zone Logo" className="logo-image" /> */}
          <div className="logo-icon">
            {/* This is a simplified SVG-like tooth/heart icon for demonstration */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pink heart outline or similar */}
              <path d="M50 85L25 60C10 45 10 25 25 10C40 -5 60 -5 75 10C90 25 90 45 75 60L50 85Z" fill="#E91E63" fillOpacity="0.2" stroke="#E91E63" strokeWidth="3"/>
              {/* Blue tooth shape inside */}
              <path d="M50 20C40 20 30 30 30 40C30 50 40 60 50 70C60 60 70 50 70 40C70 30 60 20 50 20Z" fill="#2196F3" stroke="#2196F3" strokeWidth="3"/>
              {/* Smile for the tooth */}
              <path d="M40 55C45 60 55 60 60 55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="clinic-text">
            <h1 className="clinic-name">Dr.Ujjwal's</h1>
            <p className="dental-clinic-tag">DENTAL CARE</p>
          </div>
        </div>
        <div className="doctor-info">
          Dr. Ujjwal
        </div>
      </div>

      <div className="mobile-only-title">Smile Zone Dental Clinic</div> {/* Visible only on mobile */}

      <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          {/* <li><a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
          <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li> */}
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;