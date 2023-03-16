import './BtnNav.sass';
import { NavLink } from 'react-router-dom';

export const Nav = ({ lable, link }) => {

  return (
    <NavLink        className={({ isActive }) =>
    isActive ? 'nav__link nav__link_active' : 'nav__link'
  } to={link} >
      {lable}
    </NavLink>
  );
};
