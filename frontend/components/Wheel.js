import React, { useState } from "react";

export default function Wheel(props) {
  const [cog, setCog] = useState(0);

  const moveClockwise = () => {
    cog < 5 ? setCog(cog + 1) : setCog(0);
  };

  const moveCounterClockwise = () => {
    cog !== 0 ? setCog(cog - 1) : setCog(5);
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={cog === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>
          {cog === 0 ? "B" : ""}
        </div>
        <div className={cog === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>
          {cog === 1 ? "B" : ""}
        </div>
        <div className={cog === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>
          {cog === 2 ? "B" : ""}
        </div>
        <div className={cog === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>
          {cog === 3 ? "B" : ""}
        </div>
        <div className={cog === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>
          {cog === 4 ? "B" : ""}
        </div>
        <div className={cog === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>
          {cog === 5 ? "B" : ""}
        </div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={moveClockwise}>
          Clockwise
        </button>
      </div>
    </div>
  );
}
