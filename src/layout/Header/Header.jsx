import './Header.sass';
import { Navigation } from '../../Components/Navigation/Navigation.jsx';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { Select } from '../../Components/Select/Select';

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo-nav">
        <img src={logo} alt="Логотип" />
      </NavLink>
      <div className="header__nav-container">
        <Navigation />
      </div>
      <div className="header__icons">
        <Select />
        <button
          className="header__cart"
          onClick={() => alert('Переход в корзину')}
        />
      </div>
    </header>
  );
};
