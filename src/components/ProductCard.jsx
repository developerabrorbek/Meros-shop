import Product1 from "../assets/images/product1.jpg";
import FavoriteImages from "../assets/images/Favorites-icon.svg";
import Viewed from "../assets/images/visibility.svg";
import Favorite from "../assets/images/card-favorite.svg";
import Basket from "../assets/images/basket.svg";
import { useRef } from "react";

const ProductCard = () => {
  const elBasket = useRef(null);
  const elWatch = useRef(null);
  const elFavorite = useRef(null);

  const handleMouseMove = () => {
    elBasket.current.classList.remove("-left-12", "animate-left");
    elBasket.current.classList.add("animate-right");
    elFavorite.current.classList.remove("-left-12", "animate-left");
    elFavorite.current.classList.add("animate-right");
    elWatch.current.classList.remove("-left-12", "animate-left");
    elWatch.current.classList.add("animate-right");
  };

  const handleMouseLeave = () => {
    elBasket.current.classList.remove("animate-right");
    elBasket.current.classList.add("animate-left");
    elFavorite.current.classList.remove("animate-right");
    elFavorite.current.classList.add("animate-left");
    elWatch.current.classList.remove("animate-right");
    elWatch.current.classList.add("animate-left");
  };
  let cardActionButtons = (
    <>
      <div className="actions flex flex-col gap-2 w-8 absolute top-8 left-3 z-20">
        <div
          ref={elWatch}
          className="watch flex cursor-pointer relative -left-12 items-center transition-all justify-center p-2 rounded bg-[#666666] hover:bg-[#F5921C]"
        >
          <img src={Viewed} alt="Watch icon" />
        </div>
        <div
          ref={elFavorite}
          className="favorite flex cursor-pointer relative  -left-12 items-center transition-all justify-center p-2 rounded bg-[#666666] hover:bg-[#F5921C]"
        >
          <img src={Favorite} alt="Favorite icon" />
        </div>
        <div
          ref={elBasket}
          className="basket flex cursor-pointer relative  -left-12 items-center transition-all justify-center p-2 rounded bg-[#666666] hover:bg-[#F5921C]"
        >
          <img src={Basket} alt="Basket icon" />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        onMouseOver={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="product-card overflow-hidden h-[377px] relative hover:shadow-lg transition-all p-2 rounded-sm"
      >
        {cardActionButtons}
        <div className="product-image relative mb-[10px]">
          <img src={Product1} alt="product image" />
          <span className="absolute bottom-0 left-0 px-2  text-white rounded-md bg-[#F5921C] text-[18px] font-bold text-center">
            -54%
          </span>
        </div>
        <div className="product-body">
          <span className="product-category text-[#8D909B] mb-[10px]">
            Книги
          </span>
          <h4 className="product-title max-h-[42px] text-ellipsis font-medium text-[18px] text-[#273142] mb-[10px]">
            Книги Коран
          </h4>
          <div className="rating">
            <img src={FavoriteImages} alt="favorite image" />
          </div>
          <div className="product-price absolute bottom-2">
            <h3 className="text-2xl text-[#32386B] font-bold">120 000 сум</h3>
            <span className="discount line-through text-[#8D909B]">
              220 000 сум
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
