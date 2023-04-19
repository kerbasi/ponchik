import "./BurgerMenu.sass";
import { NavLink } from "react-router-dom";

export const BurgerMenu = ({ isActive }) => {
  const className = isActive ? "burger-menu burger-menu_active" : "burger-menu";

  return (
    <div className={className}>
      <NavLink
        to='/menu/donuts'
        className={({ isActive }) =>
          isActive ? "burger__link burger__link_active" : "burger__link"
        }
      >
        Меню
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive ? "burger__link burger__link_active" : "burger__link"
        }
      >
        О нас
      </NavLink>
      <NavLink
        to='/contacts'
        className={({ isActive }) =>
          isActive ? "burger__link burger__link_active" : "burger__link"
        }
      >
        Контакты
      </NavLink>
    </div>
  );
};
