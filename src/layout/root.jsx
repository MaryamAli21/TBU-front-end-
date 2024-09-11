import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/common/footer";
import Header from "../components/common/headers/MainHeader";

const RootLayout = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      once: true,
      // easing: 'ease-i',
      // delay: 100,
    });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
