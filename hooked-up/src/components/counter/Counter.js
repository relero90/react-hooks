import React from "react";
import "./counter.css";

function Counter() {
  return (
    <div className="counterContainer">
      <button className="counterBtn"> - </button>
      <span className="count">0</span>
      <button className="counterBtn"> + </button>
    </div>
  );
}

export default Counter;
