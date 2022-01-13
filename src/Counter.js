import React from "react";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <div className="counterContainer">
      <h1 className="counterTitle">Counter</h1>
      <p className="value"> {value}</p>
      <div className="btnContainer">
        <button
          type="button"
          className="increase"
          onClick={() => setValue(value + 1)}
        >
          Increase{" "}
        </button>
        <button type="button" className="increase" onClick={() => reset()}>
          Reset{" "}
        </button>
        <button
          type="button"
          className="increase"
          onClick={() => setValue(value - 1)}
        >
          Decrease{" "}
        </button>
      </div>
    </div>
  );
}

export default Counter;
