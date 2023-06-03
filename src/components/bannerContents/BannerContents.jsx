import { useEffect } from "react";
import arrowBlack from "../../assets/icons/arrow_black.svg";
import gsap from "gsap";

export default function BannerContents() {
  useEffect(() => {
    const bannerTl = gsap.timeline();

    bannerTl
      .fromTo(
        ".title span",
        {
          y: 100,
          opacity: 0,
          skewX: -20,
        },
        {
          y: 0,
          skewX: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: "power4.out",
        }
      )
      .fromTo(
        ".right__container--description",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,

          ease: "power4.out",
        },
        1
      )
      .fromTo(
        ".btn__primary",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,

          ease: "power4.out",
        },
        1
      );
  }, []);

  return (
    <div className="banner__layout">
      <div className="left__container">
        <h1 className="title">
          <span>Discover the</span>
          <span>community of</span>
          <span>wealthtech</span>
        </h1>
      </div>
      <div className="right__container">
        <p className="right__container--description">
          Cras in est enim risus dui enim. Proin neque nunc faucibus ac
          condimentum. Felis diam malesuada mi egestas aliquet
        </p>
        <a href="#" className="btn__primary">
          <span>Learn More</span>

          <span>
            <img src={arrowBlack} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
}
