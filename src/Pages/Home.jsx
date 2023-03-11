import { AboutUsSection } from '../Components/AboutUsSection/AboutUsSection';
import { OftenOrdered } from '../Components/OftenOrdered/OftenOrdered';
import { SectionBorder } from '../Components/SectionBorder/SectionBorder';
import { Hero } from '../Components/Hero/Hero'

export const Home = () => {
  return (
    <>
      <Hero />
      <SectionBorder backgroundColor="#252525" />
      <OftenOrdered />
      <SectionBorder type='second' />
      <AboutUsSection />
      <SectionBorder type='third' />
    </>
  );
};
 