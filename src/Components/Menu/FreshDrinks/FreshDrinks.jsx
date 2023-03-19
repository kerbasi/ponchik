import './FreshDrinks.sass';
import { List } from '../List/List';
import { FRESH_DRINKS } from '../../../data/freshes/freshes';

const options = {
  items: FRESH_DRINKS,
};

export const FreshDrinks = () => {
  return (
    <section className="freshdrinks">
      <div className="freshdrinks__container">
        <h2 className="freshdrinks__title">Холодные напитки</h2>
        <List options={options} drinks="true" />
      </div>
    </section>
  );
};
