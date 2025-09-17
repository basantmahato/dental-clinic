import React from 'react';
import './AboutClinic.css';

// You would typically import images like this:
// import doctorWorkingImage from './path/to/doctor-working.jpg';

const AboutClinic = () => {
  const clinicImage = './cr2.avif'; // Placeholder image

  return (
    <div className="about-clinic-section">
      <div className="clinic-text-content">
        <h2 className="clinic-name-title">Liu's Dental Care</h2>
        <p>
          <strong>Dr. Ujjwal's Dental Clinic</strong> is one of the most advanced dental clinics in
          Jamshedpur that caters to all dental related problems. Our Moto is to provide the best dental treatments at affordable
          prices to the community.
        </p>
        <p>
          We maintain very high standards of sterilisation and quality of
          dentistry. Spreading miles of smiles is our daily mantra and we
          have successfully achieved our goal in hundreds of happy
          patients.
        </p>
        <p>
          Dr Aaron Chen is the managing director at Liu's Dental And
          Implant Centre. He is the third generation dentist in his family
          and has an experience of over 12 years. Dr Aaron specializes in
          Root canal Treatment, Full mouth Rehabs and Cosmetic
          dentistry.
        </p>
        <p>
          He did his Bachelor of Dental Surgery from Chettinad Health
          City in Chennai and was a gold medalist, post which he did his
          training in the UK and currently is one of the leading
          implantologists in Eastern India. Dr Aaron is also the current
          Hon. General Secretary Of IDA Jamshedpur.
        </p>
      </div>

      <div className="clinic-image-gallery">
        <div className="gallery-main-image-container">
          <img src={clinicImage} alt="Dr. Aaron Chen working with a patient" className="gallery-main-image" />
          {/* Add navigation arrows here if you want a carousel effect later */}
          {/* <button className="gallery-arrow left-arrow">{'<'}</button>
          <button className="gallery-arrow right-arrow">{'>'}</button> */}
        </div>
        <div className="gallery-dots">
          {/* These would typically be mapped from an array of images */}
          {/* <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span> */}
        </div>
      </div>
    </div>
  );
};

export default AboutClinic;