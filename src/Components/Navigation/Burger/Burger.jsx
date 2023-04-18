import "./Burger.sass";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

export const Burger = () => {
  const [isActive, setIsActive] = useState(true);
  const className = isActive
    ? "burger-nav__btn burger-nav__btn_active"
    : "burger-nav__btn";
  const handleBtnClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className={className} onClick={handleBtnClick}>
        <span />
        <BurgerMenu isActive={isActive} />
      </div>
    </>
  );
};
