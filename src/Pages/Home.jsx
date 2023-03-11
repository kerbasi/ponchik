import { AboutUsSection } from '../components/AboutUsSection/AboutUsSection';
import { OftenOrdered } from '../components/OftenOrdered/OftenOrdered';
import { SectionBorder } from '../components/SectionBorder/SectionBorder';
import { Hero } from '../components/Hero/Hero'

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
 