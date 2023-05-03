import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>teet</h1>
      <Footer />
    </>
  );
};

export default Layout;
