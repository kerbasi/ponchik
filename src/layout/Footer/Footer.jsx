import "./Footer.sass";
import logo from "../../assets/logo.png";
import { Navigation } from "../../components/Navigation/Navigation";
import inst from "../../assets/inst.png";
import tlg from "../../assets/tlg.png";
import wa from "../../assets/wa.png";
import vk from "../../assets/vk.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer__logo" />
      <div className="footer__nav">
        <Navigation />
      </div>
      <div className="footer__contacts">
        <a
          href="tel:2222222222222222222222222222222222222"
          className="footer__contacts-tel"
        >
          тел. +7 (921) 656 57 61
        </a>
        <address className="footer__contacts-adress">
          Россия, г Санкт-Петербург, ул. Ольги Берггольц, д 36, стр 2, офис 1
        </address>
        <div className="footer__contacts-socials">
          <p className="footer__contacts-socials-text">Свяжитесь с нами:</p>
          <div className="footer__contacts-socials-list">
            <a href="#" className="footer__contacts-socials-link">
              <img src={inst} alt="" />
            </a>
            <a href="#" className="footer__contacts-socials-link">
              <img src={tlg} alt="" />
            </a>
            <a href="#" className="footer__contacts-socials-link">
              <img src={wa} alt="" />
            </a>
            <a href="#" className="footer__contacts-socials-link ">
              <img src={vk} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
