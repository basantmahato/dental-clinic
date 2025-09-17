import React from 'react';
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  const phoneNumber = "8210377825"; // Replace with your WhatsApp number, in international format without any '+' or '00'
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-icon-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-container">
        <svg
          className="whatsapp-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M380.9 97.1C339.4 55.6 283.8 32 224.2 32c-100.2 0-181.5 81.3-181.5 181.5c0 31.6 9.4 62.4 27.2 89.6L32 480l110.1-29.2c26 14.8 55.4 22.2 85.1 22.2c100.2 0 181.5-81.3 181.5-181.5c0-48.4-18.7-93.5-51.2-127zM224.2 448.2c-26 0-51.5-7.8-73.4-22.3L64 435.5l14.9-56.1c-16.1-25.7-24.3-55.5-24.3-85.7c0-82.5 67-149.5 149.5-149.5s149.5 67 149.5 149.5s-67 149.5-149.5 149.5zM340.2 240.2c-5.1-2.5-24.1-11.9-27.8-13.3c-3.7-1.4-6.4-2.1-9.1 2.1c-2.7 4.2-10.4 13.3-12.8 16c-2.4 2.7-4.8 3.1-9.1 1.1c-4.3-2.1-18.1-6.7-34.4-21.2c-12.6-11.2-21.1-25.1-23.6-29.4c-2.5-4.2-.3-6.4 1.8-8.5c1.9-1.9 4.2-4.9 6.3-7.4c2.1-2.5 2.8-4.8 4.2-7.2c1.4-2.4.7-4.5-.4-6.3c-1.1-1.9-9.1-21.8-12.5-29.9c-3.3-8.1-6.7-6.9-9.1-6.9c-2.4 0-5.1-.3-7.8-.3s-4.2.4-6.4 2.1c-2.1 1.4-8 7.8-12 12.8c-4 5-8 11.9-8 19.3c0 7.4 8.2 14.4 11.8 19.4c3.6 5 28.5 42.1 69.8 57.5c41.2 15.4 49.3 12.9 58.1 11.4c8.8-1.5 24.1-9.9 27.5-19.1c3.4-9.2 3.4-17 2.4-19.1c-1.1-2.1-4-3.1-8.3-5.2z" fill="#fff" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppIcon;