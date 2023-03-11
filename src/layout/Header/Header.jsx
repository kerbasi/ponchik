import './Header.sass';
import { Navigation } from '../../components/Navigation/Navigation';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { Select } from '../../components/Select/Select';

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
