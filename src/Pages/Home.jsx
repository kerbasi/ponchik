import { AboutUsSection } from '../Components/AboutUsSection/AboutUsSection';
import { OftenOrdered } from '../Components/OftenOrdered/OftenOrdered';
import { SectionBorder } from '../Components/SectionBorder/SectionBorder';

export const Home = () => {
  return (
    <>
      <SectionBorder type='first' />
      <OftenOrdered />
      <SectionBorder type='second' />
      <AboutUsSection />
      <SectionBorder type='third' />
    </>
  );
};
 