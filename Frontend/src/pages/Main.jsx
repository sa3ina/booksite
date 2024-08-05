import React from "react";
import "../assets/styles/main.scss";
import HeroSection from "../assets/components/HeroSection";
import BookPages from "../assets/components/BookPages";
import Information from "../assets/components/Information";
import Image from "../assets/components/Image";
import Video from "../assets/components/Video";
const Main = () => {
  return (
    <div className="main">
      <HeroSection />
      <BookPages />
      <Information />
      <Image />
      <Video />
    </div>
  );
};

export default Main;
