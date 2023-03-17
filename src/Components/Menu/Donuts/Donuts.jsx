import './Donuts.sass';
import { DONUTS } from '../../../data/donuts/donuts';
import { Sets } from '../Sets/Sets';
import { List } from '../List/List';

const options = {
  type: 'white',
  set: 'false',
  items: DONUTS,
};

export const Donuts = () => {
  return (
    <>
      <section className="donuts">
        <div className="donuts__container">
          <h2 className="donuts__title">Пончики</h2>
          <List options={options} />
        </div>
      </section>
      <Sets />
    </>
  );
};
