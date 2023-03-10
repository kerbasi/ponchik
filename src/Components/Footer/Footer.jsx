import "./Footer.sass";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer__logo" />
      <div className="footer__nav">
        <NavLink>Меню</NavLink>
        <NavLink>О нас</NavLink>
        <NavLink>Контакты</NavLink>
      </div>
      <div className="footer__contacts">
        <a href="" className="footer__contacts-tel">
          тел. +7 (921) 656 57 61
        </a>
        <a href="" className="footer__contacts-adress">
          Россия, г Санкт-Петербург, ул. Ольги Берггольц, д 36, стр 2, офис 1
        </a>
      </div>
    </footer>
  );
};
