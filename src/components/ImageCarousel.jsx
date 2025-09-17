import React, { useState, useEffect, useCallback } from 'react';
import './ImageCarousel.css';

const images = [
  './cr1.webp',
  './cr2.avif',
  './cr3.avif', 
  
];

const ImageCarousel = ({ autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(goToNext, autoPlayInterval);
    }
    return () => clearInterval(interval); // Clean up on unmount or if autoPlay changes
  }, [autoPlay, autoPlayInterval, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-arrow left-arrow" onClick={goToPrevious} aria-label="Previous image">
          &#10094; {/* Left arrow character */}
        </button>
        <div className="carousel-content">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${imageSrc})` }}
              aria-hidden={index !== currentIndex}
              role="img"
              aria-label={`Dental clinic image ${index + 1}`}
            >
              {/* Image content is set via background-image in CSS */}
            </div>
          ))}
        </div>
        <button className="carousel-arrow right-arrow" onClick={goToNext} aria-label="Next image">
          &#10095; {/* Right arrow character */}
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;