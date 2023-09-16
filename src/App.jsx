import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (  
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
      <ToastContainer
        position="top-right"
        draggable
        pauseOnHover
        closeOnClick
        autoClose={4000}
        hideProgressBar={false}
        theme="light"
      />
    </>
  );
};

export default App;
