import "./Burger.sass";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

export const Burger = ({ handleBurgerBtnClick, isBurgerActive, isMobile }) => {
  return (
    <>
      <div
        className={`burger-nav__btn ${
          isBurgerActive ? "burger-nav__btn_active" : ""
        }`}
        onClick={handleBurgerBtnClick}
      >
        <span />
        <BurgerMenu isActive={isBurgerActive} />
      </div>
    </>
  );
};
