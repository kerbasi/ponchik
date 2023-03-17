import './ReviewCard.sass';

export const ReviewCard = ({ review }) => {
  const { name, text, image } = review;

  return (
    <div className="review">
      <img src={image} alt={name} className="review__image" />
      <h2 className="review__name">{name}</h2>
      <p className="review__text">{text}</p>
    </div>
  );
};
