import './List.sass';
import { Card } from '../Card';
import { CardDrinks } from '../CardDrinks/CardDrinks';

export const List = ({ options, drinks = false }) => {
  const { type, set, items } = options;

  return (
    <>
      {!drinks ? (
        <ul className="list">
          {items.map((item) => (
            <li key={item.id}>
              <Card type={type} data={item} set={set} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="list">
          {items.map((item) => (
            <li key={item.id}>
              <CardDrinks data={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
