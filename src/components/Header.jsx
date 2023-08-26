import logo from "../assets/images/logo.svg";
import basket from "../assets/images/shopping-cart.svg";
import favoriteIcon from "../assets/images/favorite.svg";
import profile from "../assets/images/Profile-icon.svg";
import down from "../assets/images/down-icon.svg";
import search from "../assets/images/search-icon.svg";
import category from "../assets/images/category.svg";
import { Link } from "react-router-dom";
import pin from "../assets/images/Pin.svg";
const Header = () => {
  return (
    <>
      <header className="">
       <div className="container mx-auto px-[90px] pb-8">
       <div className="flex justify-between border-b border-b-[#E8EDF1]">
          <ul className="flex justify-between gap-7 py-[14px]">
            <li className="border-r border-r-[#E8EDF1] pr-[9px]">
              <Link
                to="/Рус"
                className="text-[14px] font-semibold hover:text-[#F5921C]"
              >
                Русский
              </Link>
            </li>
            <li className="border-r border-r-[#E8EDF1] pr-[9px]">
              <Link to="/Uzb" className="text-[14px] font-semibold hover:text-[#F5921C]">O‘zbekcha</Link>
            </li>
            <li>
              <Link to="/Ўзб" className="text-[14px] font-semibold hover:text-[#F5921C]">
                Ўзбекча
              </Link>
            </li>
          </ul>
          <ul className="flex justify-between gap-7 py-[14px]">
            <li className="flex">
              <form className="flex justify-between ">
                <img src={pin} alt="location" />
                <select style={{ "-webkit-appearance": "none" }} className="outline-none hover:text-[#01377F] ">
                  <option value="toshkent" >Ташкент</option>
                  <option value="samarqand">Самарканд</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                  <option value="toshkent">Ташкент</option>
                </select>
              </form>
            </li>
            <li className="hover:text-[#01377F]">
              <Link to="/sale">Скидки</Link>
            </li>
            <li className="hover:text-[#01377F]">
              <Link to="/delivery">Доставка</Link>
            </li>
            <li className="hover:text-[#01377F]">
              <Link to="/help">Помощ</Link>
            </li>
            <li className="hover:text-[#01377F]">
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 flex items-center justify-between gap-8">
          <div className="flex gap-[45px]">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button className="flex gap-3 bg-[#32386B] px-[23px] py-3 rounded">
              <img src={category} alt="category" />
              <p className="text-lg font-semibold text-white">Католог</p>
            </button>
            <form className=" w-[631px] flex justify-between items-center ps-5 bg-[#F4F7F8] rounded-[5px] border border-[#E8EDF1] overflow-hidden">
              <input
                type="search"
                placeholder="Поиск по товаром..."
                className=" w-[60%] h-full outline-none text-sm border-r border-[#E8EDF1] bg-[#F4F7F8] placeholder:opacity-60"
              />
              <button className=" flex items-center gap-2 my-[10px] px-3 text-[#8D909B] font-normal  bg-[#F4F7F8]">
                Все категории
                <img src={down} alt="down" />
              </button>
              <span className="w-[70px]  h-full flex justify-center bg-[#32386B]">
                <img src={search} alt="search icon" className="" width={22} />
              </span>
            </form>
          </div>
          <ul className="flex items-center justify-between gap-3">
            <li className="">
              <Link to="/profile" className="flex items-center justify-between gap-3">
                <img src={profile} alt="profile" width={24}/>
                <p className="text-[#273142]">Кабинет</p>
              </Link>
            </li>
            <li className="">
              <Link to="/favorite" className="flex items-center justify-between gap-3">
                <img src={favoriteIcon} alt="favourites" width={24}/>
                <p className="text-[#273142]">Избранное</p>
              </Link>
            </li>
            <li className="">
              <Link to="/shopping" className="flex items-center justify-between gap-3">
                <img src={basket} alt="shopping basket" width={24}/>
                <p className="text-[#273142]">Корзина</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-[25px]">
            <ul className="flex justify-between ">
                <li className="hover:text-[#114FEF]">
                    <Link to="/book" >Книги</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Сувениры</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Дом и интерьер</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Красота и уход</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Идеи подарка</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Диски</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Атрибутика</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Продукты питания</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Парфюмерия</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Meros Мерч Бренд</Link>
                </li>
                <li className="hover:text-[#114FEF]">
                    <Link to="/book">Meros Дисконт</Link>
                </li>
            </ul>
        </div>
       </div>
      </header>
    </>
  );
};

export default Header;
