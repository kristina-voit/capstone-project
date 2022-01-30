import React, { Component } from "react";
import "../Meditation/styles.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Halten");
  const [grow, setGrow] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [count, setCount] = useState();

  const breathIn = () => {
    ({
      setText: "Einatmen",
      setCount: count + 1,
      setGrow: true,
      setShrink: false,
    });
  };

  const breathOut = () => {
    ({
      setText: "Ausatmen",
      setCount: count - 1,
      setGrow: false,
      setShrink: true,
    });
  };

  return (
    <div id="Universal">
      <div
        className={`moon-container ${grow ? "grow" : ""} ${
          shrink ? "shrink" : ""
        }`}
        id="animation"
        onAnimationIteration={count === 1 ? breathOut : breathIn}
      >
        <div className="text-area">
          <h2>
            {count} : {text}
          </h2>
        </div>
        <div className="moon"></div>

        <div className="star-container">
          <span className="star"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
