import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { movies } from "./movies";
import Movie from "./Movie";
import Counter from "./Counter";

const MovieComponent = () => {
  return (
    <>
      <h1 className="title"> Movies list </h1>
      <div className="all">
        {movies.map((movie) => {
          return <Movie {...movie}></Movie>;
        })}
      </div>
      <div>
        <h1>Counter</h1>
        <div>
          <Counter />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));
