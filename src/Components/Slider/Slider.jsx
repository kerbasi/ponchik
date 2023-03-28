import "./Slider.scss";
import { useEffect, useState } from "react";

const MySlider = ({ data, navigation }) => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

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

  const handleTouchStart = (event) => {
    console.log(event.touches);
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const swipeLength = touchEndX - touchStartX;
      if (swipeLength > 50 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (swipeLength < -50 && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
      setTouchStartX(null);
      setTouchEndX(null);
    }
  };

  const useDots = () => {
    return (
      <div className="dots-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides[currentSlide]}

    {navigation && useDots()}
    </div>
  );
};

export default MySlider;
