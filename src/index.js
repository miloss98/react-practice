import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const MovieComponent = () => {
  return (
    <>
      <Inception />
      <div className="genre">
        <p>Action, Mystery</p>
      </div>
    </>
  );
};

const Inception = () => {
  return (
    <div className="background">
      <img className="img" alt="" />
    </div>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));
