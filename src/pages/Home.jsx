import Footer from "../components/Footer";
import Header from "../components/Header";
import AsideImg from "../assets/images/aside-img.jpg";
import SecondAsideImg from "../assets/images/second-aside.png";
import SmallBanners from "../components/SmallBanners";
import HeroBanners from "../components/HeroBanners";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import AdvertImage from "../assets/images/advertisement.png";

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

      <section className="offers mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <div className="offers__inner">
            <SectionTitle title="Лучшие предложения!" />
            <div className="products flex gap-x-7">
              <aside>
                <img src={AsideImg} alt="Aside image" className="h-[780px]" />
              </aside>
              <ul className="grid grid-cols-4 gap-7">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="advertisement mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <img src={AdvertImage} alt="Advertisement" />
        </div>
      </section>

      <section className="sales mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <div className="sales__inner">
            <SectionTitle title="Все товары со скидками!" />
            <div className="products flex gap-x-7">
              <aside className="order-7">
                <img
                  src={SecondAsideImg}
                  alt="Aside image"
                  className="h-[780px]"
                />
              </aside>
              <ul className="grid grid-cols-4 gap-7">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </>
  );
};

export default Home;
