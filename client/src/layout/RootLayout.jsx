import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/svg/background.svg"

const RootLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-scroll bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
