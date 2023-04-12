import "./Navigation.sass";
import { NavLink } from "react-router-dom";

export const Navigation = ({ footer }) => {
  return (
    <nav className={footer ? "nav nav_type_footer" : "nav"}>
      <NavLink
        to='/menu/donuts'
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
      >
        Меню
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
      >
        О нас
      </NavLink>
      <NavLink
        to='/contacts'
        className={({ isActive }) =>
          isActive ? "nav__link nav__link_active" : "nav__link"
        }
      >
        Контакты
      </NavLink>
    </nav>
  );
};
