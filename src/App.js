import React from "react";
import { moviesData } from "./data/moviesData";
import Movie from "./components/Movie";
//import Counter from "./components/Counter";
import Watchlist from "./components/Watchlist";
import "./styles/app.css";

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
          <Watchlist />
        </div>
      </div>
      {/*  <div className="container">
        <div>
          <Counter />
        </div>
      </div> */}
    </>
  );
};

export default App;
