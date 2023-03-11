import './Slider.scss';

import { useEffect, useState } from 'react';

const MySlider = ({ data }) => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1 >= slides.length ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(
      currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Создание массива слайдов из переданных пропсов в компонент MySlider
  useEffect(() => {
    let slidesArray = [];
    if (data && data.length !== 0) {
      data.map((item) =>
        slidesArray.push(
          <img className="imgContainer" key={item.id} src={item.image} />
        )
      );
      setSlides(slidesArray);
    }
  }, [data]);

  return (
    <div className="slider-container">
      {slides[currentSlide]}
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MySlider;
