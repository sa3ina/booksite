import React from "react";
import "../assets/styles/main.scss";
import HeroSection from "../assets/components/HeroSection";
import BookPages from "../assets/components/BookPages";
import Information from "../assets/components/Information";
import Image from "../assets/components/Image";
const Main = () => {
  return (
    <div className="main">
      <HeroSection />
      <BookPages />
      <Information />
      <Image />
    </div>
  );
};

export default Main;
