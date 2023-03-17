import './Hero.sass';
import MySlider from '../Slider/Slider';
import { HERO_SLIDES } from '../../data/hero/heroSlides';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <MySlider data={HERO_SLIDES} />
      <div className='hero__content'>
        <h1 className='hero__title'>The Ponchik</h1>
        <p className='hero__subtitle'>Каждый укус - это райское наслаждение. Попробуйте наши пончики сегодня!</p>
        <div className='hero__btn-container'>
          <Button title='Смотреть меню' action={() => navigate('/menu')} />
          <Button title='Позвонить нам' action={() => alert('Кнопка нажата!')} />
        </div>
      </div>
    </section>
  );
};
