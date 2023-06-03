import "./SectionTwo.scss";

import logoOne from "../../../assets/press-logos/svg/ap.svg";
import logoTwo from "../../../assets/press-logos/svg/benzinga 2.svg";
import logoThree from "../../../assets/press-logos/svg/globe-st.svg";
import logoFour from "../../../assets/press-logos/svg/imn.svg";
import logoFive from "../../../assets/press-logos/svg/marketwatch.svg";
import logoSix from "../../../assets/press-logos/svg/morningstar.svg";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {

  useEffect(() => {
    const logoTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__two",
          start: "top 50%",
        },
      })
      .to(".press__logo", {
        opacity: 1,
      });
  }, []);

  return (
    <div className="section__two">
      <div className="logo__container">
        <div className="press__logo">
          <img src={logoOne} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoTwo} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoThree} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFour} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFive} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoSix} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoOne} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoTwo} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoThree} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFour} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFive} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoSix} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoOne} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoTwo} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoThree} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFour} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFive} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoSix} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoOne} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoTwo} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoThree} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFour} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoFive} alt="" />
        </div>
        <div className="press__logo">
          <img src={logoSix} alt="" />
        </div>
      </div>
    </div>
  );
}
