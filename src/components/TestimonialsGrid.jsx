import React, { useState } from 'react';
import './TestimonialsGrid.css';

// Placeholder data for testimonials
const testimonialsData = [
  {
    id: 1,
    name: 'Neha Singh',
    date: '2025-07-08',
    avatar: './pf2.jpeg', // Replace with your actual avatar paths
    review: 'I usually stay in Delhi but was visiting Jamshedpur for some work when I started having tooth pain. I searched online for the best dental clinic and found Smile Zone Dental Clinic. Dr. Kumari Anjali is an amazing doctor. She understood my problem and explained the treatment procedure in detail. She is very professional and the clinic is very clean and hygienic. I highly recommend her to everyone.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pragati Shaunak',
    date: '2025-06-30',
    avatar: 'pf2.jpeg',
    review: 'I had sensitivity and some pain while eating sweets and cold food. I searched online and found Smile Zone Dental Clinic. The doctor was very patient and explained the cause of the problem. I underwent a few sittings, and now I feel much better. The staff is very friendly, and the clinic has a very positive atmosphere.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Biswadeep Chatterjee',
    date: '2025-06-26',
    avatar: 'pf2.jpeg',
    review: 'The service was excellent, I am very much satisfied with the work, will definitely recommend my own knows. The staff is very helpful and the doctor is very knowledgeable. The clinic is well-equipped with the latest technology.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amrit Kaur',
    date: '2025-06-26',
    avatar: 'pf2.jpeg',
    review: 'Wonderful Experience at Smile Zone Dental Clinic. I had been experiencing tooth pain and decided to get it checked. Dr. Kumari Anjali gave me a thorough check-up and recommended a treatment plan. The treatment was painless, and I am very happy with the results.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Shubham Shri',
    date: '2025-06-21',
    avatar: 'pf2.jpeg',
    review: 'My mother has little pain on tooth, and I was really worried about finding a good dentist. I searched on Google for "best dentist in Jamshedpur" and found Smile Zone Dental Clinic. The doctor is very kind and patient. She explained the entire procedure to my mother, and the treatment was successful. We are very grateful to her.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Kasak Agarwal',
    date: '2025-06-20',
    avatar: 'pf2.jpeg',
    review: 'I had some pain in my teeth and they were getting yellow, so I was thinking of visiting a dentist but wasn\'t sure where to go. Then I came to know about Smile Zone Dental Clinic from a friend. I am so glad I chose this clinic. The doctor is very professional, and the clinic is very hygienic.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Rishi Ranjan',
    date: '2025-05-16',
    avatar: 'pf2.jpeg',
    review: 'My self BASHISHTH KUMAR PASWAN, i was visited with tooth ache problems after taken treatment now i am fit and fine. The treatment was very effective, and I am very happy with the results. I would highly recommend Smile Zone Dental Clinic to anyone looking for a good dentist.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Dinesh Pal',
    date: '2025-03-25',
    avatar: 'pf2.jpeg',
    review: 'I had severe tooth pain and visited Dr. Kumari Anjali. I must say she is one of the best root canal treatment doctor in Jamshedpur. She is very patient and explains the entire procedure in detail. The treatment was successful, and I am very happy with the results.',
    rating: 5,
  },
];

const TestimonialsGrid = () => {
  return (
    <div className="testimonials-section">
      <div className="section-header">
        <p className="section-tagline">TESTIMONIALS</p>
        <h2 className="section-title">What Our Patients Say</h2>
      </div>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      <div className="review-button-container">
        <button className="write-review-btn">
          <span>Write a Review</span>
        </button>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = testimonial.review.split(' ');
  const isTruncated = words.length > 30;
  const truncatedReview = isTruncated ? words.slice(0, 30).join(' ') + '...' : testimonial.review;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="testimonial-card">
      <div className="card-header">
        <div className="user-info">
          <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="user-avatar" />
          <div className="user-details">
            <h4 className="user-name">{testimonial.name}</h4>
            <p className="review-date">{testimonial.date}</p>
          </div>
        </div>
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="Google" className="google-icon" /> */}
      </div>
      <div className="star-rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
        <span className="verified-icon">&#10003;</span>
      </div>
      <p className="review-text">
        {isExpanded ? testimonial.review : truncatedReview}
        {isTruncated && (
          <span className="read-more" onClick={toggleExpand}>
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        )}
      </p>
    </div>
  );
};

export default TestimonialsGrid;