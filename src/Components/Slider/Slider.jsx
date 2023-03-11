import './Slider.scss'

import { useState } from "react";

const MySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1 >= slides.length ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleDotClick = index => {
    setCurrentSlide(index);
  };

  const slides = [
    <img className='imgContainer' key="slide-1" src='https://img1.akspic.ru/previews/0/9/1/1/7/171190/171190-nacionalnyj_park_kaziranga-atmosfera-mir-prirodnyj_landshaft-purpur-550x310.jpg'/>,
    <img className='imgContainer' key="slide-2" src='https://kartinkin.net/pics/uploads/posts/2022-08/1660477371_1-kartinkin-net-p-minimalistichnie-oboi-krasivo-1.jpg'/>,
    <img className='imgContainer' key="slide-3" src='https://zastavok.net/ts/graphics/163052275128.jpg'/>
  ];

  return (
    <div className="slider-container">
      <button onClick={handlePrev} className="prev-button">Previous</button>
      {slides[currentSlide]}
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <button onClick={handleNext} className="next-button">Next</button>
    </div>
  );
};

export default MySlider;