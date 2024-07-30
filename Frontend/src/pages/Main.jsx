import React from "react";
import "../assets/styles/main.scss";
import HeroSection from "../assets/components/HeroSection";
import BookPages from "../assets/components/BookPages";
const Main = () => {
  return (
    <div className="main">
      <HeroSection />
      <BookPages />
    </div>
  );
};

export default Main;
