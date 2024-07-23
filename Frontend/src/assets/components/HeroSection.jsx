import React from "react";

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
          <img
            src="https://framerusercontent.com/images/rLFzvpOs171d8YrWNHP31dlULM.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
