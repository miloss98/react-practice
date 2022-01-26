import React from "react";
import { moviesData } from "./data/moviesData";
import "./styles/app.css";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
//import Users from "./components/Users";
//import Counter from "./components/Counter";

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

      {/*  <div className="container">
        <div>
          <Users />
        </div>
      </div> */}
    </>
  );
};

export default App;
