import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Menu } from '../../pages/Menu';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </main>
  );
};
