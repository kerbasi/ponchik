import { AboutUsSection } from '../Components/AboutUsSection/AboutUsSection';
import { OftenOrdered } from '../Components/OftenOrdered/OftenOrdered';
import { SectionBorder } from '../Components/SectionBorder/SectionBorder';
import { Hero } from '../Components/Hero/Hero';
import { Reviews } from '../components/Reviews/Reviews';

export const Home = () => {
  return (
    <>
      <Hero />
      <SectionBorder type="first" />
      <OftenOrdered />
      <SectionBorder type="second" />
      <AboutUsSection />
      <SectionBorder type="third" />
      <Reviews />
    </>
  );
};
