import './NavBar.sass';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__container">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link_type_active' : 'navbar__link'
          }
          to="/menu/donuts"
        >
          Пончики и сеты
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link_type_active' : 'navbar__link'
          }
          to="/menu/pies"
        >
          Пирожки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link_type_active' : 'navbar__link'
          }
          to="/menu/hot-drinks"
        >
          Горячие напитки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link_type_active' : 'navbar__link'
          }
          to="/menu/cold-drinks"
        >
          Холодные напитки
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'navbar__link navbar__link_type_active' : 'navbar__link'
          }
          to="/menu/fresh"
        >
          Фреши
        </NavLink>
      </nav>
    </div>
  );
};
