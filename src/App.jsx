import ButtonGradient from "./assets/svg/ButtonGradient";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import Header from "./components/Header";
import Hero from "./components/Hero";
import Script from "./components/Scripts";
import Who from "./components/Who";
import InfiniteCarousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero/>
        <Who/>
      </div>
      <Script />
      <ButtonGradient />
    </>
  );
};

export default App;
