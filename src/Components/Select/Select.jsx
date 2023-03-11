import './Select.sass';

export const Select = () => {
  return (
    <select className="select" name="lang" id="">
      <option value="Ru">Ru</option>
      <option value="Hy">Hy</option>
      <option value="En">En</option>
    </select>
  );
};
