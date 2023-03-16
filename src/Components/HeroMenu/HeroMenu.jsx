import './HeroMenu.sass';
import MySlider from '../Slider/Slider';
import { HERO_SLIDES } from '../../data/hero/heroSlides';

export const HeroMenu = () => {
  return (
    <section className="hero-menu">
      <MySlider data={HERO_SLIDES} />
      <div className="hero-menu__content">
        <h2 className="hero-menu__title">ПРАЗДНИК ВКУСА</h2>
      </div>
    </section>
  );
};
