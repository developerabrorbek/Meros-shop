import Product1 from "../assets/images/product1.jpg";
import FavoriteImages from "../assets/images/Favorites-icon.svg";

const ProductCard = () => {
  return (
    <>
      <div className="product-card h-[377px] relative hover:shadow-lg transition-all p-2 rounded-sm">
        <div className="product-image relative mb-[10px]">
          <img src={Product1} alt="product image" />
          <span className="absolute bottom-0 left-0 py-1 px-3  text-white rounded-md bg-[#F5921C] text-[18px] font-bold text-center">
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
            <span className="discount line-through text-[#8D909B]">220 000 сум</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
