import "./OftenOrdered.sass";
import "../Menu/Card.jsx";
import { Card } from "../Menu/Card.jsx";

export const OftenOrdered = () => {
  return (
    <section className="oftenOrdered">
      <h2 className="oftenOrdered__title">Чаще всего заказывают</h2>
      <div className="ofterOrdered__cards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
