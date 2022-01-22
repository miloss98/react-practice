import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { moviesData } from "./moviesData";
import Movie from "./Movie";
import Counter from "./Counter";
import Watchlist from "./Watchlist";

const MovieComponent = () => {
  return (
    <>
      <h1 className="title"> Movies list </h1>
      <div className="all">
        {moviesData.map((movie) => {
          return <Movie {...movie}></Movie>;
        })}
      </div>
      <div className="container">
        <div>
          <Counter />
        </div>
      </div>
      <div className="container">
        <div>
          <Watchlist />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));