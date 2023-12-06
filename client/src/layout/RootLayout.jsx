import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import background from "../assets/svg/background.svg"
import GameTest from "../components/GameTest";
import ModalTest from "../components/ModalTest";

const RootLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <ModalTest />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
