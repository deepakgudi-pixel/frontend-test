import { useEffect } from "react";
import chartOne from "../../../assets/imgs/Chart 1.png";
import chartTwo from "../../../assets/imgs/Chart 14.png";
import chartThree from "../../../assets/imgs/Chart 2.png";
import chartFour from "../../../assets/imgs/Chart 9.png";
import "./SectionOne.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionOne() {
  useEffect(() => {
    const boxTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__one",
          start: "top 50%",
        },
      })
      .to(".box_wrapper", {
        stagger: 0.2,
        y: 0,
        opacity: 1,
      });
  }, []);

  return (
    <div className="section__one">
      <div className="section__one--container">
        <div className="box_wrapper">
          <img src={chartOne} alt="" />
          <h3>
            Read
            <span className="line"></span>
          </h3>
        </div>
        <div className="box_wrapper">
          <img src={chartTwo} alt="" />
          <h3>
            Attend
            <span className="line"></span>
          </h3>
        </div>
        <div className="box_wrapper">
          <img src={chartThree} alt="" />
          <h3>
            Listen
            <span className="line"></span>
          </h3>
        </div>
        <div className="box_wrapper">
          <img src={chartFour} alt="" />
          <h3>
            Watch
            <span className="line"></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
