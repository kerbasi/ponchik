import { ReviewCard } from "../Reviews/ReviewCard/ReviewCard";
import { REVIEWS_DATA } from "../../data/reviews/reviews";
import "./Swiper.sass";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";

export const MySwiper = () => {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      modules={[Navigation, Pagination]}
      className='swiper_container'
      rewind={true}
      breakpoints={{
        950: {
          slidesPerView: 2,
          spaceBetween: 200,
          centeredSlides: false,
        },
        1460: {
          slidesPerView: 3,
          spaceBetween: 180,
          centeredSlides: false,
        },
      }}
    >
      {REVIEWS_DATA.map((item) => (
        <SwiperSlide key={item.id}>
          <ReviewCard review={item} />
        </SwiperSlide>
      ))}

      <div className='slider-controler'>
        <div className='swiper-pagination'></div>
      </div>
    </Swiper>
  );
};
