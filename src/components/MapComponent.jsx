import React from 'react';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div className="map-section-container">
      <h2 className="map-heading">Find Our Location</h2>
      <div className="map-responsive-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.774714760473!2d86.1557108108864!3d22.8108101792366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e48a6a17bf07%3A0x722679610fef9f25!2sDr%20Ujjwal's%20Dental%20Care!5e0!3m2!1sen!2sin!4v1758082567969!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;