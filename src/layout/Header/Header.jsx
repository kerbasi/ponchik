import "./Header.sass";
import { Navigation } from "../../Components/Navigation/Navigation.jsx";
import { Burger } from "../../Components/Burger/Burger";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Select } from "../../Components/Select/Select";
import { useState } from "react";
import useMediaQuery from "../../utils/hooks/useMediaQuery";

export const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const isTablet = useMediaQuery("(max-width: 950px)");
  const isMobile = useMediaQuery("(max-width: 650px)");

  const handleBurgerBtnClick = () => {
    setIsBurgerActive((prev) => !prev);
  };

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
        {isTablet && (
          <Burger
            handleBurgerBtnClick={handleBurgerBtnClick}
            isBurgerActive={isBurgerActive}
          />
        )}
        {isMobile && (
          <Burger
            handleBurgerBtnClick={handleBurgerBtnClick}
            isBurgerActive={isBurgerActive}
            isMobile={isMobile}
          />
        )}
      </div>
    </header>
  );
};
