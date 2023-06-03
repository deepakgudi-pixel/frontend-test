import "./SectionSix.scss";
import noyakLogo from "../../../assets/noyack-logo/logo.png";
import phone from "../../../assets/icons/phone.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import "@google/model-viewer/dist/model-viewer";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionSix() {
  const modelRef = useRef();

  useEffect(() => {
    const animOneTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__six",
          start: "top 30%",
        },
      })
      .to(".model__rocket", {
        translateY: "0px",
        opacity: 1,
        duration: 1,
      });
    const animTwoTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__six",
          start: "top 30%",
        },
      })
      .to(
        ".section__six---container h2 span, .section__six---container .invest__cta,.footer, .footer .footer--logo, .footer .footer--links, .footer .contact",
        {
          translateY: "0px",
          opacity: 1,
          ease: "power4.out",
          stagger: 0.5,
          duration: 1,
        }
      );
  }, []);

  return (
    <div className="section__six">
      <div className="model__rocket">
        <model-viewer
          class="rocket-model"
          src="./rocket-transformed.glb"
          alt="A rocket"
          loading="auto"
          interaction-prompt="none"
          camera-controls
          camera-orbit="90deg"
          disable-tap
          disable-zoom
          ref={(ref) => {
            modelRef.current = ref;
          }}
        ></model-viewer>
      </div>
      <div className="section__six---container">
        <h2>
          <span>Join the</span>
          <span>next gen of</span>
          <span>investors</span>
        </h2>
        <a href="#" className="invest__cta">
          <span>Invest now</span>
          <span>
            <svg
              width="39"
              height="26"
              viewBox="0 0 39 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.4667 1L37.4667 13M37.4667 13L25.4667 25M37.4667 13H0"
                stroke="black"
                strokeWidth="1.20833"
              />
            </svg>
          </span>
        </a>
      </div>
      <footer className="footer">
        <div className="footer--logo">
          <img src={noyakLogo} alt="logo" />
        </div>
        <ul className="footer--links">
          <li>Home</li>
          <li>Resources</li>
          <li>Start Investing</li>
        </ul>
        <ul className="contact">
          <li>
            <img src={phone} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
        </ul>
      </footer>
    </div>
  );
}
