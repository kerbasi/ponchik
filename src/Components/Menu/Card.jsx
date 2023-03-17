import { ButtonMenu } from '../Button/ButtonMenu';
import './Card.sass';

export const Card = ({ data, type = 'white', set = false }) => {
  const { price, image, title, descriptions } = data;

  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={title} className="card__img-container" />
        <span
          className={`card__img-span ${
            type === 'black' ? `card__img-span_type_black` : ''
          }`}
        >{`${price} AMD`}</span>

        {set && descriptions && (
          <ul div className="card__description">
            {descriptions.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>
      <h4 className="card__title">{title}</h4>
      <ButtonMenu lable="Добавить в корзину" />
    </div>
  );
};
