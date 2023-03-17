import './Sets.sass';
import { Card } from '../Card';
import { SETS } from '../../../data/sets/sets';
import { List } from '../List/List';

const options = {
  type: 'white',
  set: true,
  items: SETS,
};

export const Sets = () => {
  return (
    <section className="sets">
      <div className="sets__container">
        <h2 className="sets__title">Сеты</h2>
        <List options={options} />
      </div>
    </section>
  );
};
