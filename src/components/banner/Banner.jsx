import Navbar from "../navbar/Navbar";
import BannerContents from "../bannerContents/BannerContents";
import './Banner.scss';

export default function Banner() {
  return (
    <>
      <div className="banner__container">
        <Navbar />
        <BannerContents />
      </div>
    </>
  );
}
