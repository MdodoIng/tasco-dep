import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <Footer />
    </>
  );
};

export default Home;
