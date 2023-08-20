import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = e.target;
    console.log(values.phone.value, values.password.value);
  };
  return (
    <>
    <Header/>
      <div className="main bg-[#F4F7F8] py-24">
        <div className="container max-w-[1340px] mx-auto flex justify-center items-center">
          <div className="flex flex-col justify-center p-[50px] bg-white rounded w-[454px] shadow-lg">
            <h1 className="text-[28px] font-bold mb-[30px]">Регистрация</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col">
              <label className="flex flex-col text-base  font-medium mb-[30px]">
              Имя
                <input
                  type="text"
                  placeholder="Имя"
                  name="name"
                  className="placeholder:text-base placeholder:font-normal placeholder:text-[#D2D2D2] mt-[15px] rounded px-5 py-[15px] border outline-none border-[#D2D2D2]"
                />
              </label>
              <label className="flex flex-col text-base  font-medium mb-[30px]">
                Телефон
                <input
                  type="text"
                  placeholder="+998(...)"
                  name="phone"
                  className="placeholder:text-base placeholder:font-normal placeholder:text-[#D2D2D2] mt-[15px] rounded px-5 py-[15px] border outline-none border-[#D2D2D2]"
                />
              </label>
              <label className="flex flex-col text-base font-medium mb-5">
              E-mail
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  className="placeholder:text-base placeholder:font-normal placeholder:text-[#D2D2D2] mt-[15px] rounded px-5 py-[15px] border outline-none border-[#D2D2D2]"
                />
              </label>
              <label className="flex flex-col text-base font-medium mb-5">
                Пароль
                <input
                  type="text"
                  placeholder="Пароль"
                  name="password"
                  className="placeholder:text-base placeholder:font-normal placeholder:text-[#D2D2D2] mt-[15px] rounded px-5 py-[15px] border outline-none border-[#D2D2D2]"
                />
              </label>
              <label className="flex w-[70%] gap-3 text-[#273142ba] text-xs font-medium">
                <input
                  type="checkbox"
                  className="w-[24px] h-[24px] border border-[#D2D2D2]"
                />
                Я даю согласие на обработку моих персональных данных.
              </label>
              <button
                type="submit"
                className="py-5 bg-[#32386B] hover:bg-transparent transition-all hover:border hover:border-[#32386B] rounded mt-6 mb-3 text-[18px] font-medium text-white hover:text-[#32386B]"
              >
                Зарегистрироваться
              </button>
            </form>
            <div className="flex justify-center gap-1">
                <p className=" text-[#273142]">
                Есть аккаунт?
                </p>
                <Link to="/login" className="text-[#114FEF]">
                Войти
                </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Register;
