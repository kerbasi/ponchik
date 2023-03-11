import './Hero.sass';
import MySlider from '../Slider/Slider';
import { HERO_SLIDES } from '../../data/hero/heroSlides';

export const Hero = () => {
  return (
    <section className="hero">
      <MySlider data={HERO_SLIDES} />
    </section>
  );
};
