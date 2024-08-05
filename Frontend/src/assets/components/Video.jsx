import React from "react";
import "../styles/video.scss";
const Video = () => {
  return (
    <div className="videosection">
      <div className="videosectcont">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/3r5SWS32uuU?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=3r5SWS32uuU&color=white"
            frameborder="0"
          ></iframe>
        </div>
        <div className="beigepart">
          <div className="beigepartcont">
            <p className="who">Who is this book for?</p>
            <p className="this">
              This book is for anyone creating digital products for children,
              whether
              <strong> inexperienced or seasoned, designer or not.</strong> It
              covers
              <strong>
                design, research, strategy, and the business side of the
                product.
              </strong>
              Backed by studies and experts in the industry, it provides
              <strong>
                valuable tips, best practices, and guidelines in design,
                education, business, marketing, and writing for kids.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
