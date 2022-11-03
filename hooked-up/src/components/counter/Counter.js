import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function countDown() {
    setCount((oldCount) => oldCount - 1);
    setColor("red");
  }
  function countUp() {
    setCount((oldCount) => oldCount + 1);
    setColor("green");
  }

  return (
    <div className="counterContainer">
      <button className="counterBtn" onClick={countDown}>
        {" "}
        -{" "}
      </button>
      <span className="count" id={color}>
        {count}
      </span>
      <button className="counterBtn" onClick={countUp}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
