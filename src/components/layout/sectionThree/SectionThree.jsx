import "./SectionThree.scss";
import bitcoinBeach from "../../../assets/imgs/Bitcoin Beach.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionThree() {
  useEffect(() => {
    const beachTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__three",
          start: "top 20%",
        },
      })
      .to(".section__three--image-wrapper", {
        scale: 1,
        opacity: 1,
        ease: "power4.out",
      })
      .to('.section__three--contents h2 span, .section__three--contents p',{
        translateY: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.5,
      })
 
    
  }, []);

  return (
    <div className="section__three">
      <div className="section__three--image-wrapper">
        <img src={bitcoinBeach} alt="" />
      </div>
      <div className="section__three--contents">
        <h2>
          <span>Revolutionizing</span>
          <span>the way you can</span>
          <span>invest</span>
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
