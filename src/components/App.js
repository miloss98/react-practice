import React from "react";
import { moviesData } from "../moviesData";
import Movie from "./Movie";
import Counter from "./Counter";
import Watchlist from "./Watchlist";
import "../styles/app.css";

const App = () => {
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

export default App;
