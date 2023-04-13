import "./Reviews.sass";

import { ReviewCard } from "./ReviewCard/ReviewCard";
import { REVIEWS_DATA } from "../../data/reviews/reviews";

import { useRef, useEffect } from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export const Reviews = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef.current;
    const params = {
      navigation: true,
      pagination: true,

      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <section className='reviews'>
      <h2 className='reviews__title'>Отзывы</h2>
      <div className='reviews__cards'>
        <swiper-container
          ref={swiperElRef}
          slides-per-view='3'
          speed='500'
          loop='true'
          navigation='true'
        >
          {REVIEWS_DATA.map((item) => (
            <swiper-slide>
              <ReviewCard key={item.id} review={item} />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};
