import "./Burger.sass";

export const Burger = ({ handleBurgerBtnClick, isBurgerActive }) => {
  return (
    <>
      <div
        className={`burger-nav__btn ${
          isBurgerActive ? "burger-nav__btn_active" : ""
        }`}
        onClick={handleBurgerBtnClick}
      >
        <span />
      </div>
    </>
  );
};
