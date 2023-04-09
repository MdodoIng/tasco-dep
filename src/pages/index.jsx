import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";

const Home = () => {

  
  useEffect(() => {
    const scrollBar = Scrollbar.init(document.querySelector(".main"), {
      damping: 0.06,
      delegateTo: document,
      alwaysShowTracks: false,
      speed: 3,
    });
  }, []);

  return (
    <div className="main h-screen w-full flex flex-col  overflow-auto">
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <Footer />
    </div>
  );
};

export default Home;
