import Footer from "../components/Footer";
import Header from "../components/Header";

import AsideImg from "../assets/images/aside-img.jpg";
import Viewed from "../assets/images/visibility.svg";
import Favotite from "../assets/images/favorite.svg";
import Basket from "../assets/images/basket.svg";
import Product1 from "../assets/images/product1.jpg";
import SmallBanners from "../components/SmallBanners";
import HeroBanners from "../components/HeroBanners";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <HeroBanners />
        </div>
      </section>

      <section className="specials mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <div className="specials__inner">
            <SectionTitle title="Специально для вас" />
            <SmallBanners />
          </div>
        </div>
      </section>

      <section className="offers">
        <div className="container mx-auto px-[90px]">
          <div className="offers__inner">
            <SectionTitle title="Лучшие предложения!" />
            <ul className="grid grid-cols-5 gap-7">
              <aside className="row-span-2">
                <img src={AsideImg} alt="Aside image" className="h-[780px]"/>
              </aside>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </ul>
          </div>
        </div>
      </section>




      <Footer />
    </>
  );
};

export default Home;
