import "./Burger.sass";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

export const Burger = ({ handleBurgerBtnClick, isBurgerActive, isMobile }) => {
  const className = isBurgerActive
    ? "burger-nav__btn burger-nav__btn_active"
    : "burger-nav__btn";

  return (
    <>
      <div className={className} onClick={handleBurgerBtnClick}>
        <span />
        <BurgerMenu isActive={isBurgerActive} />
      </div>
    </>
  );
};
