import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
      <ToastContainer
        position='top-center'
        autoClose={4000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        hideProgressBar={false}
        theme='colored'
      />
    </>
  );
};

export default App;
