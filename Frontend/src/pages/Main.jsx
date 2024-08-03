import React from "react";
import "../assets/styles/main.scss";
import HeroSection from "../assets/components/HeroSection";
import BookPages from "../assets/components/BookPages";
import Information from "../assets/components/Information";
const Main = () => {
  return (
    <div className="main">
      <HeroSection />
      <BookPages />
      <Information />
    </div>
  );
};

export default Main;
