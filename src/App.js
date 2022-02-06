import React from "react";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
import Users from "./components/Users";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Movie />
      <Watchlist />
      <Users />
      <Counter />
    </>
  );
};

export default App;
