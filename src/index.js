import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const MovieComponent = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));
