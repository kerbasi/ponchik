import './Reviews.sass';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { REVIEWS_DATA } from '../../data/reviews/reviews';

export const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>
      <div className='reviews__cards'>
        {REVIEWS_DATA.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </div>
    </section>
  );
};
