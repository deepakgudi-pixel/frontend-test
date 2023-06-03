import "./Navbar.scss";
import noyakLogo from "../../assets/noyack-logo/logo.png";
import searchIcon from "../../assets/icons/Search.svg";
import gsap from "gsap";

function menuToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line-1", 0.5, {
      rotate: "45",
      y: 5,
      background: "white",
    });
    gsap.to(".line-2", 0.5, {
      rotate: "-45",
      y: -5,
      background: "white",
    });
    gsap.to(".nav-bar", 1, {
      clipPath: "circle(2500px at 50% -10%)",
    });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line-1", 0.5, {
      rotate: "0",
      y: 0,
      background: "black",
    });
    gsap.to(".line-2", 0.5, {
      rotate: "0",
      y: 0,
      background: "black",
    });
    gsap.to(".nav-bar", 1, {
      clipPath: "circle(50px at 50% -10%)",
    });
    document.body.classList.remove("hide");
  }
}

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={noyakLogo} alt="" />
        </div>
        <ul className="nav__items">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Learn
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link nav__btn">
              invest now
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link nav__search">
              <img src={searchIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
      {/*mobile view */}
      <header className="nav-header">
        <div className="menu" onClick={menuToggle}>
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
      </header>

      <nav className="nav-bar">
        <div className="logo-responsive">
          <img src={noyakLogo} alt="" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#" className="menu-btn">
              Invest Now
            </a>
          </li>
          <li>
            <a href="#">
              <img src={searchIcon} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
