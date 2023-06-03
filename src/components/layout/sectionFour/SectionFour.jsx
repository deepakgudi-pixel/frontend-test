import "./SectionFour.scss";
import diamondHand from "../../../assets/imgs/Diamond Hands.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  useEffect(() => {
    const diamondTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__four",
          start: "top 30%",
        },
      })
      .to(".section__four--image-wrapper", {
        scale: 1,
        opacity: 1,
        ease: "power4.out",
      })
      .to('.section__four--contents h2 span, .section__four--contents p',{
        translateY: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.5,
      })
      ;
  }, []);

  return (
    <div className="section__four">
      <div className="section__four--image-wrapper">
        <img src={diamondHand} alt="" />
      </div>
      <div className="section__four--contents">
        <h2>
          <span>Alignment with </span>
          <span>Investors</span>
        </h2>
        <p>
          Augue iaculis enim ornare aenean viverra ullamcorper. Commodo lacus
          sapien commodo arcu sed. Auctor nunc egestas elit sollicitudin sem
          ultricies eget. Et quam adipiscing porta tellus.
        </p>
      </div>
    </div>
  );
}
