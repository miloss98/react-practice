import React from "react";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <div>
      {value}
      <div>
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
