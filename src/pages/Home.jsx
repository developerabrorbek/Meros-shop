import Footer from "../components/Footer";
import Header from "../components/Header";


import AsideImg from "../assets/images/aside-img.jpg";
import Viewed from "../assets/images/visibility.svg";
import Favotite from "../assets/images/favorite.svg";
import Basket from "../assets/images/basket.svg";
import Product1 from "../assets/images/product1.jpg";
import SmallBanners from "../components/SmallBanners";
import HeroBanners from "../components/HeroBanners";

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <HeroBanners/>
        </div>
      </section>

      <section className="specials">
        <div className="container mx-auto px-[90px]">
          <div className="specials__inner">
            <h2 className="text-[28px] font-bold text-[#273142] mb-[30px]">Специально для вас</h2>
            <SmallBanners/>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
