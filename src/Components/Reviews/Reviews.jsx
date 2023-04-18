import "./Reviews.sass";

import { ReviewCard } from "./ReviewCard/ReviewCard";
import { REVIEWS_DATA } from "../../data/reviews/reviews";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const Reviews = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Navigation]}
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
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
      {/* </div> */}
    </section>
  );
  // return (
  //   <>
  //     <div className='container'>
  //       <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
  //         <SwiperSlide>Slide 1</SwiperSlide>
  //         <SwiperSlide>Slide 2</SwiperSlide>
  //         <SwiperSlide>Slide 3</SwiperSlide>
  //         <SwiperSlide>Slide 4</SwiperSlide>
  //         <SwiperSlide>Slide 5</SwiperSlide>
  //         <SwiperSlide>Slide 6</SwiperSlide>
  //         <SwiperSlide>Slide 7</SwiperSlide>
  //         <SwiperSlide>Slide 8</SwiperSlide>
  //         <SwiperSlide>Slide 9</SwiperSlide>
  //       </Swiper>
  //     </div>
  //   </>
  // );
};
