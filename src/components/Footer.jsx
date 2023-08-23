import playmarket from "../assets/images/play-market.svg";
import appstore from "../assets/images/app-store.svg";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#ffffff]">
      <div className="container mx-auto px-[90px] py-[30px]">
      <div className="flex flex-col">
        <ul className="flex justify-between items-start border-b border-[#E8EDF1] pb-6">
          <li>
            <h1 className="mb-5 font-bold">
              Наши предложения
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Meros Дисконт
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Meros Мерч Бренд
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Cкидки
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Новинки
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Коллекции
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Распродажа
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Популярные товары
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Рекомендуемые товары
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="mb-5 font-bold">
         Сервис и поддержка
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Бренды
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Обратная связь
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Публичная оферта
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="mb-5 font-bold">
              О компании
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Как пройти
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Вакансии и карьера
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  Почему нам доверяют
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="mb-5 font-bold">
              Для связи
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  +998 97 992 48 78
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#32386B]">
                  +998 71 123 48 78
                </Link>
              </li>
              <li>
                <Link to=" https:merosshop@gmail.com" className="hover:text-[#32386B]">
                  merosshop@gmail.com
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h1 className="mb-5 font-bold ">
              Мы в соцсетях
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className=" flex gap-3 hover:text-[#32386B]">
                  <a
                    href="#"
                    className="text-[#8D909B] transition-all hover:text-[#F5921C]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <ellipse
                        cx="17.4998"
                        cy="17.5003"
                        rx="14.5833"
                        ry="14.5833"
                        fill="currentColor"
                      />
                      <path
                        d="M17.5 10.3266C19.8363 10.3266 20.1131 10.3355 21.0358 10.3776C21.8889 10.4165 22.3522 10.559 22.6605 10.6789C23.0689 10.8376 23.3604 11.0272 23.6666 11.3334C23.9728 11.6396 24.1624 11.9311 24.3211 12.3395C24.441 12.6478 24.5835 13.1111 24.6224 13.9642C24.6645 14.8869 24.6734 15.1636 24.6734 17.5C24.6734 19.8363 24.6645 20.1131 24.6224 21.0357C24.5835 21.8888 24.441 22.3521 24.3211 22.6605C24.1624 23.0689 23.9728 23.3604 23.6666 23.6665C23.3604 23.9727 23.0689 24.1623 22.6605 24.3211C22.3522 24.4409 21.8889 24.5834 21.0358 24.6223C20.1132 24.6644 19.8365 24.6734 17.5 24.6734C15.1635 24.6734 14.8868 24.6644 13.9643 24.6223C13.1111 24.5834 12.6478 24.4409 12.3395 24.3211C11.9311 24.1623 11.6396 23.9727 11.3334 23.6665C11.0272 23.3604 10.8376 23.0689 10.6789 22.6605C10.559 22.3521 10.4165 21.8888 10.3776 21.0357C10.3355 20.1131 10.3266 19.8363 10.3266 17.5C10.3266 15.1636 10.3355 14.8869 10.3776 13.9642C10.4165 13.1111 10.559 12.6478 10.6789 12.3395C10.8376 11.9311 11.0272 11.6396 11.3334 11.3334C11.6396 11.0272 11.9311 10.8376 12.3395 10.6789C12.6478 10.559 13.1111 10.4165 13.9643 10.3776C14.8869 10.3355 15.1637 10.3266 17.5 10.3266ZM17.5 8.75C15.1236 8.75 14.8257 8.76007 13.8924 8.80266C12.9611 8.84513 12.325 8.99306 11.7684 9.20934C11.193 9.43296 10.7051 9.73215 10.2186 10.2186C9.73215 10.7051 9.43296 11.193 9.20938 11.7684C8.99306 12.325 8.84513 12.961 8.80266 13.8924C8.76007 14.8256 8.75 15.1236 8.75 17.5C8.75 19.8763 8.76007 20.1743 8.80266 21.1076C8.84513 22.0389 8.99306 22.675 9.20938 23.2315C9.43296 23.8069 9.73215 24.2949 10.2186 24.7814C10.7051 25.2678 11.193 25.567 11.7684 25.7906C12.325 26.0069 12.9611 26.1548 13.8924 26.1973C14.8257 26.2399 15.1236 26.2499 17.5 26.2499C19.8764 26.2499 20.1743 26.2399 21.1076 26.1973C22.039 26.1548 22.675 26.0069 23.2316 25.7906C23.807 25.567 24.2949 25.2678 24.7814 24.7814C25.2679 24.2949 25.567 23.8069 25.7907 23.2315C26.0069 22.675 26.1549 22.0389 26.1973 21.1076C26.2399 20.1743 26.25 19.8763 26.25 17.5C26.25 15.1236 26.2399 14.8256 26.1973 13.8924C26.1549 12.961 26.0069 12.325 25.7907 11.7684C25.567 11.193 25.2679 10.7051 24.7814 10.2186C24.2949 9.73215 23.807 9.43296 23.2316 9.20934C22.675 8.99306 22.039 8.84513 21.1076 8.80266C20.1743 8.76007 19.8764 8.75 17.5 8.75Z"
                        fill="white"
                      />
                      <path
                        d="M17.504 13.0103C15.0224 13.0103 13.0107 15.0219 13.0107 17.5035C13.0107 19.985 15.0224 21.9967 17.504 21.9967C19.9855 21.9967 21.9972 19.985 21.9972 17.5035C21.9972 15.0219 19.9855 13.0103 17.504 13.0103ZM17.504 20.4201C15.8931 20.4201 14.5873 19.1143 14.5873 17.5035C14.5873 15.8926 15.8931 14.5868 17.504 14.5868C19.1148 14.5868 20.4207 15.8926 20.4207 17.5035C20.4207 19.1143 19.1148 20.4201 17.504 20.4201Z"
                        fill="white"
                      />
                      <path
                        d="M23.2245 12.8303C23.2245 13.4102 22.7544 13.8803 22.1745 13.8803C21.5946 13.8803 21.1245 13.4102 21.1245 12.8303C21.1245 12.2504 21.5946 11.7803 22.1745 11.7803C22.7544 11.7803 23.2245 12.2504 23.2245 12.8303Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#8D909B] transition-all hover:text-[#F5921C]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <ellipse
                        cx="17.4998"
                        cy="17.5003"
                        rx="14.5833"
                        ry="14.5833"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.2844 25.4794C21.3328 25.9381 21.726 24.977 21.726 24.977L24.5 11.0415C24.4782 10.1022 23.2113 10.6702 23.2113 10.6702L7.68121 16.7642C7.68121 16.7642 6.93857 17.0263 7.00409 17.485C7.06962 17.9437 7.65937 18.1622 7.65937 18.1622L11.5692 19.4727C11.5692 19.4727 12.7487 23.3388 12.989 24.0815C13.2074 24.8023 13.404 24.8241 13.404 24.8241C13.6224 24.9115 13.819 24.7586 13.819 24.7586L16.3527 22.4651L20.2844 25.4794ZM20.9613 13.5091C20.9613 13.5091 21.5073 13.1814 21.4855 13.5091C21.4855 13.5091 21.5729 13.5528 21.2889 13.8585C21.0268 14.1207 14.8454 19.6687 14.0153 20.4113C13.9498 20.455 13.9061 20.5205 13.9061 20.6079L13.6659 22.6611C13.6222 22.8795 13.3382 22.9014 13.2727 22.7048L12.2461 19.341C12.2024 19.21 12.2461 19.0571 12.3771 18.9697L20.9613 13.5091Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-[#8D909B] transition-all hover:text-[#F5921C]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <ellipse
                        cx="17.4998"
                        cy="17.5003"
                        rx="14.5833"
                        ry="14.5833"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.3754 12.3654C20.9209 12.2745 20.307 12.2066 19.9209 12.2066C18.8756 12.2066 18.8077 12.6611 18.8077 13.3883V14.6829H21.4208L21.193 17.3645H18.8077V25.5212H15.5357V17.3645H13.854V14.6829H15.5357V13.0242C15.5357 10.7521 16.6035 9.47949 19.2846 9.47949C20.2161 9.47949 20.8979 9.61585 21.7839 9.79765L21.3754 12.3654Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.meroshopping.app"
                  className="hover:text-[#32386B]"
                >
                  <img src={playmarket} alt="Google Play" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#32386B]">
                  <img src={appstore} alt="App Store" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p className=" m-auto mt-5"> Meros Shop © 2020. Все права защищены.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
