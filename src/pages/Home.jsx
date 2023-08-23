import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import banner1 from "../assets/images/banner-1.jpg";
import banner2 from "../assets/images/banner-2.jpg";
import banner3 from "../assets/images/banner-3.jpg";
import banner4 from "../assets/images/banner-4.jpg";
import MerosMerch from "../assets/images/Meros-Merch.svg";
import MerosDiscont from "../assets/images/Meros-discont.svg";
import MerosGift from "../assets/images/Meros-Gift.svg";
import AsideImg from "../assets/images/aside-img.jpg";
import Viewed from "../assets/images/visibility.svg";
import Favotite from "../assets/images/favorite.svg";
import Basket from "../assets/images/basket.svg";
import Product1 from "../assets/images/product1.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-[90px]">
        <section className="hero gap-3 grid grid-cols-[420px_minmax(420px,_1fr)_420px] grid-rows-[170px_minmax(170px,_1fr)_170px]">
          <div className="col-start-1 col-end-3 row-start-1 row-end-3 ">
            <Link to="/">
              <img src={banner1} alt="" className="w-full h-full" />
            </Link>
          </div>
          <div className="col-start-3 col-end-4 row-start-1 row-end-2">
            <Link to="/">
              <img src={banner2} alt="" className="w-full h-full" />
            </Link>
          </div>
          <div className=" col-start-3 col-end-4 row-start-2 row-end-3">
            <Link to="/">
              <img src={banner3} alt="" className="w-full h-full" />
            </Link>
          </div>
          <div className="mt-6 col-start-1 col-end-4 row-start-3 row-end-4">
            <Link to="/">
              <img src={banner4} alt="" className="w-full h-full" />
            </Link>
          </div>
        </section>
        
      </div>

      <Footer />
    </>
  );
};

export default Home;
