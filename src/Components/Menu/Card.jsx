import { ButtonMenu } from "../Button1/ButtonMenu";
import "./Card.sass";
import photo from "./temp.jpg";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={photo} alt="" className="card__img-container" />
        <span className="card__img-span">450 AMD</span>
      </div>
      <h4 className="card__title">Сет «Классический» (12 шт.)</h4>
      <ButtonMenu lable='Добавить в корзину'/>
    </div>
  );
};
