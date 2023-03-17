import './OftenOrdered.sass';
import '../Menu/Card.jsx';
import { List } from '../Menu/List/List';
import { SETS } from '../../data/sets/sets';

const options = {
  type: 'black',
  set: true,
  items: SETS,
};

export const OftenOrdered = () => {
  return (
    <section className="oftenOrdered">
      <h2 className="oftenOrdered__title">Чаще всего заказывают</h2>
      <div className="ofterOrdered__cards">
        <List options={options} />
      </div>
    </section>
  );
};
