import React, { useState } from 'react';
import './slide-show.css';

const SlideShow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const LENGTH = pictures.length;

  const nextSlide = () => {
    setCurrent(current === LENGTH - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? LENGTH - 1 : current - 1);
  };

  return (
    <figure className="slideshow">
      <button onClick={prevSlide} className="left-arrow">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="right-arrow">
        <i className="fas fa-chevron-right"></i>
      </button>
      {pictures.map((picture, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={picture} alt="Logement" className="image" />}
          <b>{index + 1}/{pictures.length}</b>
        </div>
      ))}
    </figure>
  );
};

export default SlideShow;
