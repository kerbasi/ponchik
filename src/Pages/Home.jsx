import { AboutUsSection } from '../components/AboutUsSection/AboutUsSection';
import { OftenOrdered } from '../components/OftenOrdered/OftenOrdered';
import { SectionBorder } from '../components/SectionBorder/SectionBorder';

export const Home = () => {
  return (
    <>
      <SectionBorder backgroundColor="#252525" />
      <OftenOrdered />
      <SectionBorder backgroundColor="#252525" />
      <AboutUsSection />
      <SectionBorder backgroundColor="#F3EBE6" />
    </>
  );
};
