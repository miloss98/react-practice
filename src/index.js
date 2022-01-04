import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { movies } from "./movies";
import Movie from "./Movie";

const MovieComponent = () => {
  return (
    <>
      <h1 className="title"> Movies list </h1>
      <div className="all">
        {movies.map((movie) => {
          return <Movie {...movie}></Movie>;
        })}
      </div>
    </>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));
