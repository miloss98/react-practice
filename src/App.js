import React from "react";
//components
import HomePage from "./components/HomePage";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Users from "./components/Users";
import Counter from "./components/Counter";
import Forms from "./components/Forms";
import LoremIpsum from "./components/LoremIpsum";
import ColorGenerator from "./components/ColorGenerator";
//routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/users" element={<Users />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/lorem-ipsum" element={<LoremIpsum />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
