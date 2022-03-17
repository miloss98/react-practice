import React from "react";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
import Users from "./components/Users";
import Counter from "./components/Counter";
import Forms from "./components/Forms"
import LoremIpsum from "./components/LoremIpsum";
import ColorGenerator from "./components/ColorGenerator";


const App = () => {
  return (
    <>
      <Movie />
      <Watchlist />
      <Users />
      <Counter />
      <Forms />
      <LoremIpsum />
      <ColorGenerator />
    </>
  );
};

export default App;
