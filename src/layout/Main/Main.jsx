import { Route, Routes } from 'react-router-dom';
import { AboutUs } from '../../Pages/AboutUs';
import { Contacts } from '../../Pages/Contacts';
import { Home } from '../../Pages/Home';
import { Menu } from '../../Pages/Menu';

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
