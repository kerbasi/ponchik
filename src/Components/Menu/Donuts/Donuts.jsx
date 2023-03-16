import './Donuts.sass';
import { DONUTS } from '../../../data/donuts/donuts';
import { Card } from '../Card';

export const Donuts = () => {
  return (
    <section className="donuts">
      <div className='donuts__container'>
        <h2 className="donuts__title">Пончики</h2>
        <ul className="donuts__list">
          {DONUTS.map((item) => (
            <li key={item.id}>
              <Card data={item} type='black' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
