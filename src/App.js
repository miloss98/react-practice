import React from "react";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
import Users from "./components/Users";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <div>
        <Movie />
      </div>
      <div className="container">
        <div>
          <Watchlist />
        </div>
      </div>

      <div className="container">
        <div>
          <Counter />
        </div>
      </div>

      <div className="container">
        <div>
          <Users />
        </div>
      </div>
    </>
  );
};

export default App;
