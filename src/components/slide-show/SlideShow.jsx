import React, { useState } from 'react';
import './slide-show.css';

const SlideShow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slideshow">
      <button onClick={prevSlide} className="left-arrow">
        <i className="fas fa-chevron-left"></i>
      </button>
      <button onClick={nextSlide} className="right-arrow">
        <i className="fas fa-chevron-right"></i>
      </button>
      {pictures.map((picture, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={picture} alt="Logement" className="image" />}
        </div>
      ))}
    </section>
  );
};

export default SlideShow;
