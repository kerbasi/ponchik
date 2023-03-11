import { AboutUsSection } from '../components/AboutUsSection/AboutUsSection';
import { OftenOrdered } from '../components/OftenOrdered/OftenOrdered';
import { SectionBorder } from '../components/SectionBorder/SectionBorder';

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
 