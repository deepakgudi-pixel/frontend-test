import { useEffect } from "react";
import Banner from "./components/banner/Banner";
import SectionOne from "./components/layout/sectionOne/SectionOne";
import SectionTwo from "./components/layout/sectionTwo/SectionTwo";
import SectionThree from "./components/layout/sectionThree/SectionThree";
import Lenis from "@studio-freight/lenis";
import "./styles/App.scss";
import SectionFour from "./components/layout/sectionFour/SectionFour";
import SectionFive from "./components/layout/sectionFive/SectionFive";
import SectionSix from "./components/layout/sectionSix/SectionSix";
import CustomCursor from "./components/customCursor/CustomCursor";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <CustomCursor />
      <Banner />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}

export default App;
