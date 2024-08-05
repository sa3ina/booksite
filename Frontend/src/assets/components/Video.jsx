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
        <div className="beigepart"></div>
      </div>
    </div>
  );
};

export default Video;
