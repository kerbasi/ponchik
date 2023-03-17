import './Pies.sass';
import { PIES } from '../../../data/pies/pies';
import { Sets } from '../Sets/Sets';
import { List } from '../List/List';

const options = {
  type: 'black',
  set: 'false',
  items: PIES,
};

export const Pies = () => {
  return (
    <>
      <section className="pies">
        <div className="pies__container">
          <h2 className="pies__title">Пончики</h2>
          <List options={options} />
        </div>
      </section>
      <Sets />
    </>
  );
};
