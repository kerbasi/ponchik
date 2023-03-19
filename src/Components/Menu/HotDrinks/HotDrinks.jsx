import './HotDrinks.sass';
import { List } from '../List/List';
import { HOT_DRINKS } from '../../../data/hotdrinks/hotdrinks';

const options = {
    type: 'black',
    set: 'false',
    items: HOT_DRINKS,
  };

export const HotDrinks = () => {
  return (
    <section className='hotdrinks'>
      <div className="hotdrinks__container">
        <h2 className="hotdrinks__title">Горячие напитки</h2>
        <List options={options} drinks='true' />
      </div>
    </section>
  );
};
