import React from 'react';
import './ContactHeader.css';

const ContactHeader = () => {
  return (
    <div className="contact-header">
      <div className="contact-info">
        <p className="address">Usha Complex, Shiv Path, opposite Domino's, Uliyan, Kadma, Jamshedpur, Jharkhand 831005</p>
        <p className="phone">
          Call Us Today{' '}
          <span className="phone-number">0930*****13</span>
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;