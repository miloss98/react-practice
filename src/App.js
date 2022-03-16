import React from "react";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
import Users from "./components/Users";
import Counter from "./components/Counter";
import LoremIpsum from "./components/LoremIpsum";

const App = () => {
  return (
    <>
      <Movie />
      <Watchlist />
      <Users />
      <Counter />
      <LoremIpsum />
    </>
  );
};

export default App;
