import { Link } from "react-router-dom";
import axios from "axios"
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = e.target;
    const {data} = await axios.post("http://10.10.1.63:5005/api/v1/auth/login", {
        phone : values.phone.value,
        password : values.password.value
    })
    console.log(data)
  };
  return (
    <>
      <div className="bg-[#F4F7F8] py-24">
        <div className="container max-w-[1340px] mx-auto flex justify-center items-center">
          <div className="flex flex-col justify-center p-[50px] bg-white rounded w-[454px] shadow-lg">
            <h1 className="text-[28px] font-bold mb-[30px]">Авторизация</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col">
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
                Пароль
                <input
                  type="text"
                  placeholder="Пароль"
                  name="password"
                  className="placeholder:text-base placeholder:font-normal placeholder:text-[#D2D2D2] mt-[15px] rounded px-5 py-[15px] border outline-none border-[#D2D2D2]"
                />
              </label>
              <label className="flex justify-start items-center gap-3 text-[#273142ba] text-xs font-medium">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] border border-[#D2D2D2]"
                />
                Запомнить пароль
              </label>
              <button
                type="submit"
                className="py-5 bg-[#666] hover:bg-transparent transition-all hover:border hover:border-[#666] rounded mt-6 mb-3 text-[18px] font-medium text-white hover:text-[#666]"
              >
                Войти
              </button>
              <Link
                to="/register"
                className="py-5 border text-[#666] hover:bg-[#666] transition-all hover:text-white border-[#666] hover:border-none rounded text-center text-[18px] font-medium "
              >
                Зарегистрироваться
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
