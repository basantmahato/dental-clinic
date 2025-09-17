import React from 'react';
import './ContactUs.css'; 
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; 

const ContactUs = () => {
  const phoneNumber = "0930*****13"; 
  const address = "Dr Ujjwals Dental Care, Usha Complex, Shiv Path, opposite Dominos, Uliyan, Kadma, Jamshedpur, Jharkhand 831005";

  return (
    <div className="contact-us-section">
      <div className="contact-header-banner">
        <h1 className="contact-main-title">Contact</h1>
      </div>

      <div className="contact-content-wrapper">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name (required)</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email (required)</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Your Phone Number (required)</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            {/* You might add a submit button here */}
            {/* <button type="submit" className="submit-button">Send Message</button> */}
          </form>
        </div>

        <div className="contact-info-details">
          <h2 className="info-query-title">Have Any Queries?</h2>
          <p className="info-description">
            Wish to get a free consultation or a quick checkup to identify the kind of
            treatment you need? Just give us a call or submit the form here.
          </p>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span className="info-text">{phoneNumber}</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span className="info-text">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;