import { useState } from "react";
import "./ButtonMenu.sass";

export const ButtonMenu = ({ lable }) => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount((prev) => prev + 1);
  };

  const removeFromCart = () => {
    setCount((prev) => prev - 1);
  }

  return (
    <div className="buttonMenu">
      {count >= 1 ? (
        <div className="buttonMenu__buttons">
          <button className="buttonMenu__decrease" onClick={removeFromCart}>-</button>
          <p className="buttonMenu__count">{count}</p>
          <button className="buttonMenu__increase" onClick={addToCart}>+</button>
        </div>
      ) : (
        <button className="buttonMenu__button" onClick={addToCart}>
          {lable}
        </button>
      )}
    </div>
  );
};
