import { AboutUsSection } from "../Components/AboutUsSection/AboutUsSection";
import { Footer } from "../Components/Footer/Footer";
import { OftenOrdered } from "../Components/OftenOrdered/OftenOrdered";
import { SectionBorder } from "../Components/SectionBorder/SectionBorder";
import MySlider from "../Components/Slider/Slider";

export const Main = () => {
  return (
    <>
      <main>
        <SectionBorder backgroundColor="#252525" />
        <OftenOrdered/>
        <SectionBorder backgroundColor="#252525" />
        <AboutUsSection />
        <SectionBorder backgroundColor="#F3EBE6" />
      </main>
      <Footer />
    </>
  );
};
