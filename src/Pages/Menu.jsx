import { HeroMenu } from '../Components/HeroMenu/HeroMenu';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../Components/Menu/NavBar/NavBar';
import { Donuts } from '../Components/Menu/Donuts/Donuts';
import { Pies } from '../Components/Menu/Pies/Pies';
import { HotDrinks } from '../Components/Menu/HotDrinks/HotDrinks';
import { ColdDrinks } from '../Components/Menu/ColdDrinks/ColdDrinks';
import { FreshDrinks } from '../Components/Menu/FreshDrinks/FreshDrinks';

export const Menu = () => {
  return (
    <>
      <HeroMenu />
      <NavBar />
      <Routes>
        <Route exact path="donuts" element={<Donuts />} />
        <Route exact path="pies" element={<Pies />} />
        <Route exact path="hot-drinks" element={<HotDrinks />} />
        <Route exact path="cold-drinks" element={<ColdDrinks />} />
        <Route exact path="fresh" element={<FreshDrinks />} />
      </Routes>
    </>
  );
};
