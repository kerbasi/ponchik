import { ButtonMenu } from "../Button/ButtonMenu";
import "./Card.sass";
import photo from "./temp.jpg";

const TEMP_DATA = {
  image: photo,
  price: 450,
  title: 'Сет «Классический» (12 шт.)'
}

export const Card = ({data = TEMP_DATA, type = 'white'}) => {

  const {price, image, title} = data;

  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt={title} className="card__img-container" />
        <span className={`card__img-span ${type === 'black' ? `card__img-span_type_black` : ''}`}>{`${price} AMD`}</span>
      </div>
      <h4 className="card__title">{title}</h4>
      <ButtonMenu lable='Добавить в корзину'/>
    </div>
  );
};
