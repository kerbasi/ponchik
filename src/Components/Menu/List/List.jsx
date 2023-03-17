import './List.sass';
import { Card } from '../Card';

export const List = ({ options }) => {
  const { type, set, items } = options;

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>
          <Card type={type} data={item} set={set} />
        </li>
      ))}
    </ul>
  );
};
