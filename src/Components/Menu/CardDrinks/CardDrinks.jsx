import { useState } from 'react';
import { ButtonMenu } from '../../Button/ButtonMenu';
import './CardDrinks.sass';

export const CardDrinks = ({ data }) => {
  const { image, title, sizes } = data;
  console.log(sizes);
  const [typeDrink, setTypeDrink] = useState(sizes[0]);
  const [isFirstBtnActive, setIsFirstBtnActive] = useState(true);

  const handleSizeFirstClick = () => {
    setIsFirstBtnActive(true);
    setTypeDrink(sizes[0]);
  };

  const handleSizeSecondClick = () => {
    setIsFirstBtnActive(false);
    setTypeDrink(sizes[1]);
  };

  return (
    <div className="card-drinks">
      <div className="card-drinks__img">
        <img src={image} alt={title} className="card-drinks__img-container" />
        <div className="card-drinks__sizes">
          <button
            className={`card-drinks__size-btn ${
              isFirstBtnActive ? `card-drinks__size-btn_type_inactive` : ''
            }`}
            onClick={handleSizeFirstClick}
          >
            {sizes[0].size}
          </button>
          <button
            className={`card-drinks__size-btn ${
              !isFirstBtnActive ? `card-drinks__size-btn_type_inactive` : ''
            }`}
            onClick={handleSizeSecondClick}
          >
            {sizes[1].size}
          </button>
        </div>
        <span className="card-drinks__img-span">{`${typeDrink.price} AMD`}</span>
      </div>
      <h4 className="card__title">{title}</h4>
      <ButtonMenu lable="Добавить в корзину" />
    </div>
  );
};
