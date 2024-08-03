import React from "react";
import "../styles/information.scss";
import star from "../images/svg-image-22.svg";
const Information = () => {
  return (
    <div className="info">
      <div className="purpleside">
        <div className="purplesidecont">
          <div className="texts">
            <img src={star} alt="" width="33px" />
            <div className="text">
              <strong> 250+ pages </strong> of best practices, tips, guidelines
              and information, based on <strong>scientific studies </strong> and
              <strong> decades of experience</strong>.
            </div>
          </div>
          <div className="texts">
            <img src={star} alt="" width="33px" />
            <div className="text">
              <strong> Interviews with industry experts</strong>, including
              people from <strong> Netflix, PBS Kids, Toca Boca</strong>, and
              more.
            </div>
          </div>
          <div className="texts">
            <img src={star} alt="" width="33px" />
            <div className="text">
              <strong> Practical tips and real-world advice</strong> to really
              put into practice what you read.
            </div>
          </div>
          <div className="texts">
            <img src={star} alt="" width="33px" />
            <div className="text">
              <strong> Usability and accessibility </strong> information that
              will make you a<strong> better , more inclusive designer</strong>
              on any kind of product, <strong>not just for kids</strong>.
            </div>
          </div>
        </div>
      </div>
      <div className="pages"></div>
    </div>
  );
};

export default Information;
