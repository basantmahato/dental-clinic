import React from 'react';
import './Services.css';

// Service data
const servicesData = [
  {
    image: './cr1.webp', 
    title: 'Root Canal Treatment',
    description: 'Teeth that might normally have to be pulled can be saved by root canal therapy. It entails extracting pus and injured or dead nerve tissues from the diseased teeth\'s root canals. The root canal is prepped so that it can be sealed with a filling by removing any diseased or dead tissue and cleaning and disinfecting the remaining canal area.',
  },
  {
    image: './cr2.avif',
    title: 'Dental Implants',
    description: 'An oral implantologist inserts a dental implant, which is a synthetic tooth root, into your jaw to support a bridge or replacement tooth. For those in good overall oral health who have lost a tooth or teeth as a result of an accident or for any other cause, dental implants are a great alternative.',
  },
  {
    image: './cr3.avif',
    title: 'Invisible/ Traditional Braces Treatment',
    description: 'Orthodontic tools including as metal braces, ceramic (tooth-colored) braces, lingual braces, and clear path (invisalign or invisible braces) are used to rectify common issues.',
  },

  {
    image: './cr4.avif', 
    title: 'Root Canal Treatment',
    description: 'Teeth that might normally have to be pulled can be saved by root canal therapy. It entails extracting pus and injured or dead nerve tissues from the diseased teeth\'s root canals. The root canal is prepped so that it can be sealed with a filling by removing any diseased or dead tissue and cleaning and disinfecting the remaining canal area.',
  },
  {
    image: './cr5.avif',
    title: 'Dental Implants',
    description: 'An oral implantologist inserts a dental implant, which is a synthetic tooth root, into your jaw to support a bridge or replacement tooth. For those in good overall oral health who have lost a tooth or teeth as a result of an accident or for any other cause, dental implants are a great alternative.',
  },
  {
    image: './cr6.avif',
    title: 'Invisible/ Traditional Braces Treatment',
    description: 'Orthodontic tools including as metal braces, ceramic (tooth-colored) braces, lingual braces, and clear path (invisalign or invisible braces) are used to rectify common issues.',
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-card-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-image-wrapper">
              <img src={service.image} alt={service.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;