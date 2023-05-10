import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import ContactUs from "../components/ContactUs";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurServices />
      <News />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
