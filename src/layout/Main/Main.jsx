import { Route, Routes } from 'react-router-dom';
import { AboutUs } from '../../pages/AboutUs';
import { Contacts } from '../../pages/Contacts';
import { Home } from '../../pages/Home';
import { Menu } from '../../pages/Menu';

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
};
