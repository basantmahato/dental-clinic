import React, { useState } from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {}
        <div className="logo-container">
          {}
          {}
          <div className="logo-icon">
            {}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {}
              <path d="M50 85L25 60C10 45 10 25 25 10C40 -5 60 -5 75 10C90 25 90 45 75 60L50 85Z" fill="#E91E63" fillOpacity="0.2" stroke="#E91E63" strokeWidth="3"/>
              {}
              <path d="M50 20C40 20 30 30 30 40C30 50 40 60 50 70C60 60 70 50 70 40C70 30 60 20 50 20Z" fill="#2196F3" stroke="#2196F3" strokeWidth="3"/>
              {}
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

      <div className="mobile-only-title">Dr. Ujjwals Dental Clinic</div> {/* Visible only on mobile */}

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