import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const MovieComponent = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));
