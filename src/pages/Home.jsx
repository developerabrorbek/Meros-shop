import Footer from "../components/Footer";
import Header from "../components/Header";
import AsideImg from "../assets/images/aside-img.jpg";
import SecondAsideImg from "../assets/images/second-aside.png";
import SmallBanners from "../components/SmallBanners";
import HeroBanners from "../components/HeroBanners";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import AdvertImage from "../assets/images/advertisement.png";
import DeliveryImage from "../assets/images/delivery.png"
import ApplicationImg from "../assets/images/application.png"
import CreditCardImg from "../assets/images/credit-card.png"

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

      <section className="services bg-[#F4F7F8]">
        <div className="container mx-auto px-[90px]">
          <div className="services__inner py-[50px]">
            <ul className="grid grid-cols-3 gap-x-[30px]">
              <li className="flex items-center border-[0.5px] border-[#8D909B] border-opacity-50 rounded-[4px]">
                <div className="card-body pl-8">
                  <h3 className="text-[22px] font-semibold mb-12">Доставка по всему Узбекистану</h3>
                  <a href="#" className="text-[18px] text-[#8D909B] ">Условия доставки</a>
                </div>
                <img src={DeliveryImage} alt="Delivery image" />
              </li>
              <li className="flex  border-[0.5px] border-[#8D909B] border-opacity-50 rounded-[4px]">
                <div className="card-body pt-[25px] pl-8">
                  <h3 className="text-[22px] font-semibold mb-6">Установите мобильное приложение</h3>
                  <a href="#" className="text-[18px] text-[#8D909B] ">Установить</a>
                </div>
                <img src={ApplicationImg} alt="Delivery image" />
              </li>
              <li className="flex border-[0.5px] border-[#8D909B] border-opacity-50 rounded-[4px]">
                <div className="card-body pt-[25px] pl-8">
                  <h3 className="text-[22px] font-semibold mb-6">Оплата наличными или картой</h3>
                  <a href="#" className="text-[18px] text-[#8D909B] ">Условия оплаты</a>
                </div>
                <img src={CreditCardImg} alt="Delivery image" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
