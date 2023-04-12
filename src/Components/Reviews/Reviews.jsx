import "./Reviews.sass";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReviewCard } from "./ReviewCard/ReviewCard";
import { REVIEWS_DATA } from "../../data/reviews/reviews";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const Reviews = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <div className='reviews__cards'>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className='mySwiper'
        >
          {REVIEWS_DATA.map((item) => (
            <SwiperSlide>
              <ReviewCard key={item.id} review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
