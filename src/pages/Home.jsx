import Footer from "../components/Footer";
import Header from "../components/Header";
import AsideImg from "../assets/images/aside-img.jpg";
import SecondAsideImg from "../assets/images/second-aside.png";
import SmallBanners from "../components/SmallBanners";
import HeroBanners from "../components/HeroBanners";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import AdvertImage from "../assets/images/advertisement.png";
import DeliveryImage from "../assets/images/delivery.png";
import ApplicationImg from "../assets/images/application.png";
import CreditCardImg from "../assets/images/credit-card.png";
import BooksImg from "../assets/images/books.png";
import SofaImg from "../assets/images/sofa.png";
import FirstBrand from "../assets/images/brand1.png"
import SecondBrand from "../assets/images/brand2.png"
import ThirdBrand from "../assets/images/brand3.png"


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

      <section className="services bg-[#F4F7F8] mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <div className="services__inner py-[50px]">
            <ul className="grid grid-cols-3 gap-x-[30px]">
              <li className="flex items-center transition-all hover:shadow-lg border-[0.5px] border-[#8D909B] border-opacity-50 rounded-[4px]">
                <div className="card-body pl-8">
                  <h3 className="text-[22px] font-semibold mb-12">
                    Доставка по всему Узбекистану
                  </h3>
                  <a href="#" className="text-[18px] text-[#8D909B] ">
                    Условия доставки
                  </a>
                </div>
                <img src={DeliveryImage} alt="Delivery image" />
              </li>
              <li className="flex transition-all hover:shadow-lg  border-[0.5px] border-[#8D909B] border-opacity-50 rounded-[4px]">
                <div className="card-body pt-[25px] pl-8">
                  <h3 className="text-[22px] font-semibold mb-6">
                    Установите мобильное приложение
                  </h3>
                  <a href="#" className="text-[18px] text-[#8D909B] ">
                    Установить
                  </a>
                </div>
                <img src={ApplicationImg} alt="Delivery image" />
              </li>
              <li className="flex transition-all hover:shadow-lg border-[0.5px] border-[#8D909B] border-opacity-50 rounded-[4px]">
                <div className="card-body pt-[25px] pl-8">
                  <h3 className="text-[22px] font-semibold mb-6">
                    Оплата наличными или картой
                  </h3>
                  <a href="#" className="text-[18px] text-[#8D909B] ">
                    Условия оплаты
                  </a>
                </div>
                <img src={CreditCardImg} alt="Delivery image" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="categories mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <div className="categories__inner">
            <div className="categories-title pb-2 border-b mb-10 flex justify-between items-center">
              <h2 className="text-[28px]  font-bold text-[#273142]">
                Популярные категории
              </h2>
              <div className="actions flex gap-3">
                <span className="left-arrow flex items-center justify-center p-1 bg-[#F4F7F8] hover:bg-[#e4f1f5] cursor-pointer rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M19.6747 22.2333L10.3247 15.9532L19.6747 9.7666V22.2333Z"
                      fill="#8D909B"
                    />
                  </svg>
                </span>
                <span className="right-arrow flex items-center justify-center p-1 bg-[#F4F7F8] hover:bg-[#e4f1f5] cursor-pointer rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M12.3253 22.2333L21.6753 15.9532L12.3253 9.7666V22.2333Z"
                      fill="#8D909B"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <ul className="grid grid-cols-5 gap-7">
              <li className="bg-[#F4F7F8] rounded h-[286px]">
                <div className="image flex items-center justify-center h-[198px]">
                  <img src={BooksImg} alt="Book category image" />
                </div>
                <h4 className="text-[24px] text-[#273142] font-bold text-center">
                  Книги
                </h4>
              </li>
              <li className="bg-[#F4F7F8] rounded h-[286px]">
                <div className="image flex items-center justify-center h-[198px]">
                  <img src={SofaImg} alt="Book category image" />
                </div>
                <h4 className="text-[24px] text-[#273142] font-bold text-center">
                  Дом и интерьер
                </h4>
              </li>
              <li className="bg-[#F4F7F8] rounded h-[286px]">
                <div className="image flex items-center justify-center h-[198px]">
                  <img src={BooksImg} alt="Book category image" />
                </div>
                <h4 className="text-[24px] text-[#273142] font-bold text-center">
                  Книги
                </h4>
              </li>
              <li className="bg-[#F4F7F8] rounded h-[286px]">
                <div className="image flex items-center justify-center h-[198px]">
                  <img src={SofaImg} alt="Book category image" />
                </div>
                <h4 className="text-[24px] text-[#273142] font-bold text-center">
                  Дом и интерьер
                </h4>
              </li>
              <li className="bg-[#F4F7F8] rounded h-[286px]">
                <div className="image flex items-center justify-center h-[198px]">
                  <img src={BooksImg} alt="Book category image" />
                </div>
                <h4 className="text-[24px] text-[#273142] font-bold text-center">
                  Книги
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="brands mb-[70px]">
        <div className="container mx-auto px-[90px]">
          <div className="brands__inner">
            <div className="brands-title pb-2 border-b mb-10 flex justify-between items-center">
              <h2 className="text-[28px]  font-bold text-[#273142]">Бренды</h2>
              <div className="actions flex gap-3">
                <span className="left-arrow flex items-center justify-center p-1 bg-[#F4F7F8] hover:bg-[#e4f1f5] cursor-pointer rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M19.6747 22.2333L10.3247 15.9532L19.6747 9.7666V22.2333Z"
                      fill="#8D909B"
                    />
                  </svg>
                </span>
                <span className="right-arrow flex items-center justify-center p-1 bg-[#F4F7F8] hover:bg-[#e4f1f5] cursor-pointer rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M12.3253 22.2333L21.6753 15.9532L12.3253 9.7666V22.2333Z"
                      fill="#8D909B"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <ul className="grid grid-cols-6 justify-between">
              <li className="flex items-center justify-center">
                <img src={FirstBrand} alt="Brand image" />
              </li>
              <li className="flex items-center justify-center">
                <img src={SecondBrand} alt="Brand image" />
              </li>
              <li className="flex items-center justify-center">
                <img src={ThirdBrand} alt="Brand image" />
              </li>
              <li className="flex items-center justify-center">
                <img src={FirstBrand} alt="Brand image" />
              </li>
              <li className="flex items-center justify-center">
                <img src={SecondBrand} alt="Brand image" />
              </li>
              <li className="flex items-center justify-center">
                <img src={ThirdBrand} alt="Brand image" />
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
