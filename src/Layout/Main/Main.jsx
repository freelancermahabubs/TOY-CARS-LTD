import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
const Main = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="min-h-[calc(100vh-0px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
