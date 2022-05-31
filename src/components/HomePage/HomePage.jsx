import React from "react";
import AboutCompanyContainer from "../HomeComponents/AboutCompanyContainer";
import Carousel from "../HomeComponents/Carousel";
import Contact from "../HomeComponents/Contact";
import Footer from "../HomeComponents/Footer";
import NavBar from "../HomeComponents/NavBar";
import PromotionContain from "../HomeComponents/PromotionContain";
import Statistics from "../HomeComponents/Statistics";

const HomePage = () => {
  return (
    <section>
      <NavBar />
      <Carousel />
      <PromotionContain />
      <AboutCompanyContainer />
      <Statistics />
      <Contact />
      <Footer />
    </section>
  );
};

export default HomePage;
