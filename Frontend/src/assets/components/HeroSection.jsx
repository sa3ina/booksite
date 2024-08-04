import React from "react";
import "../styles/herosection.scss";
import gamification from "../images/svg-image-6.svg";
import interaction from "../images/svg-image-16.svg";
import usertesting from "../images/svg-image-17.svg";
import marketing from "../images/svg-image-18.svg";
import safety from "../images/svg-image-19.svg";
import ui from "../images/svg-image-20.svg";
import ux from "../images/svg-image-21.svg";
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="herocont">
        <div className="heroleft">
          <p className="edition">2020 EDITION</p>
          <p className="designing">Designing Digital Products for Kids</p>
          <p className="deliver">
            Deliver User Experiences that delight kids,{" "}
          </p>
          <p className="parents">parents and teachers</p>
          <div className="line"></div>
          <p className="acomp">
            A comprehensive guide to design beautiful, usable, ethical digital
            experiences for kids.
          </p>
          <button className="buy">Buy Now</button>
        </div>
        <div className="heroright">
          <div className="bookcont">
            <img
              className="bookimage"
              src="https://framerusercontent.com/images/rLFzvpOs171d8YrWNHP31dlULM.png"
              alt=""
            />

            <img src={gamification} alt="" className="gamification sticker" />
            <img src={interaction} alt="" className="interaction sticker" />
            <img src={usertesting} alt="" className="usertesting sticker" />
            <img src={marketing} alt="" className="marketing sticker" />
            <img src={safety} alt="" className="safety sticker" />
            <img src={ui} alt="" className="ui sticker" />
            <img src={ux} alt="" className="ux sticker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
