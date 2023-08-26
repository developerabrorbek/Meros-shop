import MerosMerch from "../assets/images/Meros-Merch.svg";
import MerosDiscont from "../assets/images/Meros-discont.svg";
import MerosGift from "../assets/images/Meros-Gift.svg";
const SmallBanners = () => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-7">
        <li className="bg-[url('/src/assets/images/bg1.png')] p-0 bg-no-repeat rounded-sm flex items-center justify-center leading-[40px]">
          <img src={MerosMerch} alt="Meros merch" />
          <p className="text-[45px] font-bold text-center text-white">
            Meros <br /> Мерч Бренд
          </p>
        </li>
        <li className="bg-[url('/src/assets/images/bg2.png')] bg-no-repeat rounded-sm flex items-center justify-center p-9 leading-[40px]">
          <img src={MerosDiscont} alt="Meros merch" />
          <p className="text-[45px] font-bold text-center text-white">
            Meros Дисконт
          </p>
        </li>
        <li className="bg-[url('/src/assets/images/bg3.png')] bg-no-repeat rounded-sm flex items-center justify-center p-9 leading-[40px]">
          <img src={MerosGift} alt="Meros merch" />
          <p className="text-[45px] font-bold text-center text-white">
            Лучший Подарок
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SmallBanners;
