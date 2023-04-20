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
  const [isActive, setIsActive] = useState(false);

  const isTablet = useMediaQuery("(max-width: 950px)");
  const isMobile = useMediaQuery("(max-width: 650px)");

  const handleScroll = () => {
    setIsBurgerActive(false);
    document.removeEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    if (isMobile && isBurgerActive) {
      document.addEventListener("scroll", handleScroll);
    }
  }, [isBurgerActive]);

  const handleBurgerBtnClick = () => {
    setIsBurgerActive((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    console.log("test");
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 500
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

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
          <Burger
            handleBurgerBtnClick={handleBurgerBtnClick}
            isBurgerActive={isBurgerActive}
          />
        )}
        {isTablet && !isMobile && (
          <>
            <BurgerMenu isActive={isBurgerActive} />
          </>
        )}
        {isMobile && (
          <>
            <BurgerMenu isActive={isBurgerActive} isMobile={isMobile} />
          </>
        )}
      </div>
    </header>
  );
};
