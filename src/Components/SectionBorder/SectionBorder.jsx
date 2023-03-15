import "./SectionBorder.sass";
import firstImg from "../../assets/icons/border1.svg";
import secondImg from "../../assets/icons/border2.svg";
import thirdImg from "../../assets/icons/border3.svg";
import { Button } from "../Button/Button";

export const SectionBorder = ({ type }) => {
  if (type == "first") {
    return (
      <div className="sectionBorder ">
        <div className="sectionBorder__content first">
          <div className="sectionBorder__block">
            <img className="sectionBorder__img" src={firstImg} />
            <p className="sectionBorder__description">
              пончики по особому семейному рецепту
            </p>
          </div>
          <div className="sectionBorder__block">
            <img className="sectionBorder__img" src={secondImg} />
            <p className="sectionBorder__description">доставка в день заказа</p>
          </div>
          <div className="sectionBorder__block">
            <img className="sectionBorder__img" src={thirdImg} />
            <p className="sectionBorder__description">
              свадьба, мероприятия, подарки
            </p>
          </div>
        </div>
      </div>
    );
  } else if (type == "second") {
    return (
      <div className="sectionBorder second">
        <h3 className="sectionBorder__title">Посмотрите наше полное меню</h3>
        <Button title="Смотреть меню" />
      </div>
    );
  } else {
    return (
      <div className="sectionBorder third">
        <h3 className="sectionBorder__title">
          Закажите пончики домой или в офис
        </h3>
        <Button title="Смотреть меню" color="black" />
      </div>
    );
  }
};
