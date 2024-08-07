import React, { useState } from "react";
import "../styles/journal.scss";

const Journal = () => {
  const [activePaper, setActivePaper] = useState(0);

  const handleButtonClick = (index) => {
    setActivePaper(index);
  };

  return (
    <div className="journal-container">
      <div className="button-row">
        {Array.from({ length: 5 }).map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            Button {index + 1}
          </button>
        ))}
      </div>
      <div className="papers-wrapper">
        <div
          className="papers-container"
          style={{
            transform: `translateY(${-activePaper * 400}px)`,
          }}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`paper ${index === activePaper ? "active" : ""}`}
              style={{
                zIndex: index === activePaper ? 2 : 1,
                opacity: index === activePaper ? 1 : 0.5,
                transform: `rotate(${(index - activePaper) * 5}deg)`,
              }}
            >
              Content for Paper {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
