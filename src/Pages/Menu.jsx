import { HeroMenu } from '../components/HeroMenu/HeroMenu';
import { Route, Routes } from 'react-router-dom';
import { Tempblock } from '../components/Tempblock/Tempblock';
import { NavBar } from '../components/Menu/NavBar/NavBar';
import { Donuts } from '../components/Menu/Donuts/Donuts';

export const Menu = () => {
  return (
    <>
      <HeroMenu />
      <NavBar />
      <Routes>
        <Route exact path="donuts" element={<Donuts />} />
        <Route
          exact path="pies" element={<Tempblock />}
        />
        <Route exact path="hot-drinks" element={<Tempblock />} />
        <Route exact path="cold-drinks" element={<Tempblock />} />
        <Route exact path="fresh" element={<Tempblock />} />
      </Routes>
    </>
  );
};
