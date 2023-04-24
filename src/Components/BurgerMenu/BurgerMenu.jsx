import "./BurgerMenu.sass";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export const BurgerMenu = ({ isActive, setIsBurgerActive }) => {
  const handleOverlayClick = (e) => {
    if (e.currentTarget === e.target) {
      setIsBurgerActive(false);
    }
  };

  const handleLinkClick = () => {
    setIsBurgerActive(false);
  };

  return (
    <div
      className={`burger-menu ${isActive ? "burger-menu_active" : ""}`}
      onClick={(e) => {
        handleOverlayClick(e);
      }}
    >
      <div className='burger-menu__content'>
        <NavLink
          to='/menu/donuts'
          className={({ isActive }) =>
            isActive ? "burger__link burger__link_active" : "burger__link"
          }
          onClick={handleLinkClick}
        >
          Меню
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "burger__link burger__link_active" : "burger__link"
          }
          onClick={handleLinkClick}
        >
          О нас
        </NavLink>
        <NavHashLink
          to='/#contacts'
          className={({ isActive }) =>
            isActive ? "burger__link burger__link_active" : "burger__link"
          }
          onClick={handleLinkClick}
        >
          Контакты
        </NavHashLink>
      </div>
    </div>
  );
};
