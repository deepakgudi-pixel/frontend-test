import "./SectionSix.scss";
import noyakLogo from "../../../assets/noyack-logo/logo.png";

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
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.70703 17.3203L7.51953 16.3828C7.46094 16.3633 7.40234 16.3438 7.32422 16.3438C7.1875 16.3438 7.05078 16.4219 6.97266 16.5195L5.99609 17.7109C4.47266 16.9883 3.26172 15.7773 2.53906 14.2539L3.73047 13.2773C3.82812 13.1992 3.90625 13.0625 3.90625 12.9062C3.90625 12.8477 3.88672 12.7891 3.86719 12.7305L2.92969 10.543C2.85156 10.3672 2.67578 10.25 2.48047 10.25C2.46094 10.25 2.42188 10.2695 2.38281 10.2695L0.351562 10.7383C0.136719 10.7969 0 10.9727 0 11.1875C0 16.207 4.04297 20.25 9.0625 20.25C9.27734 20.25 9.45312 20.1133 9.51172 19.8984L9.98047 17.8672C9.98047 17.8281 9.98047 17.7891 9.98047 17.7695C9.98047 17.5742 9.86328 17.3984 9.70703 17.3203Z"
                fill="#DBFF00"
              />
            </svg>
          </li>
          <li>
            <svg
              width="20"
              height="30"
              viewBox="0 0 20 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.34375 19V11.9922H0.164062V19H2.34375ZM1.24219 11.0547C1.94531 11.0547 2.50781 10.4688 2.50781 9.76562C2.50781 9.08594 1.94531 8.52344 1.24219 8.52344C0.5625 8.52344 0 9.08594 0 9.76562C0 10.4688 0.5625 11.0547 1.24219 11.0547ZM10.4766 19H10.5V15.1562C10.5 13.2812 10.0781 11.8281 7.875 11.8281C6.82031 11.8281 6.11719 12.4141 5.8125 12.9531H5.78906V11.9922H3.70312V19H5.88281V15.5312C5.88281 14.6172 6.04688 13.75 7.17188 13.75C8.29688 13.75 8.32031 14.7812 8.32031 15.6016V19H10.4766Z"
                fill="#DBFF00"
              />
            </svg>
          </li>
        </ul>
      </footer>
    </div>
  );
}
