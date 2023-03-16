import { HeroMenu } from '../components/HeroMenu/HeroMenu';
import { Route, Routes } from 'react-router-dom';
import { Tempblock } from '../components/Tempblock/Tempblock';

export const Menu = () => {
  return (
    <>
      <HeroMenu />
      <Tempblock />
      {/* <Routes>
        <Route index element={<Tempblock />} />
        <Route
          exact path="pies" element={<Tempblock />}
        />
        <Route path="hot-drinks" element={<Tempblock />} />
        <Route path="cold-drinks" element={<Tempblock />} />
        <Route path="freshes" element={<Tempblock />} />
      </Routes> */}
    </>
  );
};
