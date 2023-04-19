import { MySwiper } from "../Swiper/Swiper";
import "./Reviews.sass";

export const Reviews = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <MySwiper />
    </section>
  );
};
