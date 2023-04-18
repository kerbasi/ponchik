import "./Header.sass";
import { Navigation } from "../../Components/Navigation/Navigation.jsx";
import { Burger } from "../../Components/Navigation/Burger/Burger";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Select } from "../../Components/Select/Select";

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo-container'>
          <NavLink to='/' className='header__logo-nav'>
            <img src={logo} alt='Логотип' />
          </NavLink>
        </div>
        <Navigation />

        <div className='header__icons'>
          <Select />
          <button
            className='header__cart'
            onClick={() => alert("Переход в корзину")}
          />
        </div>

        <Burger />
      </div>
    </header>
  );
};
