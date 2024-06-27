import React from 'react';
import './rating.css';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <ul className="rating">
      {[...Array(fullStars)].map((_, index) => (
        <li>
          <i key={index} className="fas fa-star full-star"></i>
        </li>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <li>
          <i key={index} className="fas fa-star empty-star"></i>
        </li>
      ))}
    </ul>
  );
};

export default Rating;
