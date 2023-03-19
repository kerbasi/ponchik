import './ColdDrinks.sass';
import { List } from '../List/List';
import { COLD_DRINKS } from '../../../data/colddrinks/colddrinks';

const options = {
  items: COLD_DRINKS,
};

export const ColdDrinks = () => {
  return (
    <section className="colddrinks">
      <div className="colddrinks__container">
        <h2 className="colddrinks__title">Холодные напитки</h2>
        <List options={options} drinks="true" />
      </div>
    </section>
  );
};
