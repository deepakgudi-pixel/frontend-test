import "./SectionFive.scss";
import bitCoin from "../../../assets/imgs/Bitcoin Coin.png";
import bitBank from "../../../assets/imgs/Bitcoin Bank.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
//import required modules
import { Navigation } from "swiper";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFive() {
  useEffect(() => {
    const slideTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".section__five",
          start: "top 60%",
        },
      })
      .to(".top__contents h2 span, .new-swiper-btns", {
        opacity: 1,
        translateY: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power4.out",
      });

    const cardsTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".slide__card",
          start: "top 50%",
        },
      })
      .to(".slide__card", {
        opacity: 1,
        translateY: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power4.out",
      });
  }, []);

  return (
    <div className="section__five">
      <div className="top__contents">
        <h2>
          <span>The best investment</span>
          <span>opportunities you</span>
          <span>can get</span>
        </h2>
        <div className="new-swiper-btns">
          <div className="swiper-new-button-prev">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.9999 21.6226L13.9999 33.6226M13.9999 33.6226L25.9999 45.6226M13.9999 33.6226H51.4666"
                stroke="black"
                strokeWidth="1.20833"
              />
              <rect
                x="64.5"
                y="65.1226"
                width="64"
                height="64"
                rx="32"
                transform="rotate(-180 64.5 65.1226)"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                className="rect__hover"
                x="64.5"
                y="65.1226"
                width="64"
                height="64"
                rx="32"
                transform="rotate(-180 64.5 65.1226)"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="swiper-new-button-next">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.4667 21.6226L51.4667 33.6226M51.4667 33.6226L39.4667 45.6226M51.4667 33.6226H14"
                stroke="black"
                strokeWidth="1.20833"
              />
              <rect
                x="0.5"
                y="1.12256"
                width="64"
                height="64"
                rx="32"
                stroke="black"
                strokeWidth="0.5"
              />
              <rect
                className="rect__hover"
                x="64.5"
                y="65.1226"
                width="64"
                height="64"
                rx="32"
                transform="rotate(-180 64.5 65.1226)"
                stroke="black"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        breakpoints={{
          1440: {
            slidesPerView: 2,
            spaceBetween: 300,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 250,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 250,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 340,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 450,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 120,
          },
          370: {
            slidesPerView: 2,
            spaceBetween: 180,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-new-button-next",
          prevEl: ".swiper-new-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideOne slide__card">
            <div className="card__holder">
              <div className="card">
                <img src={bitCoin} alt="" />
                <h3>Cryptocurrencies</h3>
                <ul className="list">
                  <li>
                    {" "}
                    <span className="bold">1M+</span>{" "}
                    <span className="regular">Verified users</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">10+</span>{" "}
                    <span className="regular">Cryptocurrencies listed</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">0.10%</span>{" "}
                    <span className="regular">Lowest transaction fees</span>
                  </li>
                  <li>
                    {" "}
                    <span className="bold">$15B</span>{" "}
                    <span className="regular">Quarterly volume traded</span>{" "}
                  </li>
                </ul>
                <a href="" className="bitcoin__cta">
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
                        stroke="white"
                        strokeWidth="1.20833"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideTwo slide__card">
            <div className="card__holder">
              <div className="card">
                <img src={bitBank} alt="" />
                <h3>Supply Chain Real Estate</h3>
                <ul className="list">
                  <li>
                    {" "}
                    <span className="bold">5M+</span>{" "}
                    <span className="regular">Verified users</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">10+</span>{" "}
                    <span className="regular">Cryptocurrencies listed</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">0.10%</span>{" "}
                    <span className="regular">Lowest transaction fees</span>
                  </li>
                  <li>
                    {" "}
                    <span className="bold">$15B</span>{" "}
                    <span className="regular">Quarterly volume traded</span>{" "}
                  </li>
                </ul>
                <a href="" className="bitcoin__cta">
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
                        stroke="white"
                        strokeWidth="1.20833"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideOne slide__card">
            <div className="card__holder">
              <div className="card">
                <img src={bitCoin} alt="" />
                <h3>Cryptocurrencies</h3>
                <ul className="list">
                  <li>
                    {" "}
                    <span className="bold">1M+</span>{" "}
                    <span className="regular">Verified users</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">10+</span>{" "}
                    <span className="regular">Cryptocurrencies listed</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">0.10%</span>{" "}
                    <span className="regular">Lowest transaction fees</span>
                  </li>
                  <li>
                    {" "}
                    <span className="bold">$15B</span>{" "}
                    <span className="regular">Quarterly volume traded</span>{" "}
                  </li>
                </ul>
                <a href="" className="bitcoin__cta">
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
                        stroke="white"
                        strokeWidth="1.20833"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideTwo slide__card">
            <div className="card__holder">
              <div className="card">
                <img src={bitBank} alt="" />
                <h3>Supply Chain Real Estate</h3>
                <ul className="list">
                  <li>
                    {" "}
                    <span className="bold">5M+</span>{" "}
                    <span className="regular">Verified users</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">10+</span>{" "}
                    <span className="regular">Cryptocurrencies listed</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="bold">0.10%</span>{" "}
                    <span className="regular">Lowest transaction fees</span>
                  </li>
                  <li>
                    {" "}
                    <span className="bold">$15B</span>{" "}
                    <span className="regular">Quarterly volume traded</span>{" "}
                  </li>
                </ul>
                <a href="" className="bitcoin__cta">
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
                        stroke="white"
                        strokeWidth="1.20833"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
