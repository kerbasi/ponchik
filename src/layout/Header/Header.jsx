import "./Header.sass";
import { Navigation } from "../../Components/Navigation/Navigation.jsx";
import { Burger } from "../../Components/Burger/Burger";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { Select } from "../../Components/Select/Select";
import { useState, useEffect } from "react";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import { BurgerMenu } from "../../Components/BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const isTablet = useMediaQuery("(max-width: 950px)");
  const isMobile = useMediaQuery("(max-width: 650px)");

  const handleBurgerBtnClick = () => {
    setIsBurgerActive((prev) => !prev);
  };

  const handleScroll = () => {
    setIsBurgerActive(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo-container'>
          <NavLink to='/' className='header__logo-nav'>
            <img src={logo} alt='Логотип' />
          </NavLink>
        </div>
        {!isTablet && !isMobile && <Navigation />}

        <div className='header__icons'>
          <Select />
          <button
            className='header__cart'
            onClick={() => alert("Переход в корзину")}
          />
        </div>
        {isTablet && (
          <>
            <Burger
              handleBurgerBtnClick={handleBurgerBtnClick}
              isBurgerActive={isBurgerActive}
            />
            <BurgerMenu
              isActive={isBurgerActive}
              setIsBurgerActive={setIsBurgerActive}
            />
          </>
        )}
      </div>
    </header>
  );
};
