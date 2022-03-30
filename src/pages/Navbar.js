import React from "react";
import { Link } from "react-router-dom";
import Movies from "./../components/Movies";
import Watchlist from "./../components/Watchlist";
import Users from "./../components/Users";
import Counter from "./../components/Counter";
import Forms from "./../components/Forms";
import LoremIpsum from "./../components/LoremIpsum";
import ColorGenerator from "./../components/ColorGenerator/ColorGenerator";

const Navbar = () => {
  return (
    <article>
      <ul>
        Links:
        <li>
          <Link to="/movies" element={<Movies />}>
            Movies page
          </Link>
        </li>
        <li>
          <Link to="/watchlist" element={<Watchlist />}>
            Watchlist
          </Link>
        </li>
        <li>
          <Link to="/users" element={<Users />}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/counter" element={<Counter />}>
            Counter
          </Link>
        </li>
        <li>
          <Link to="/forms" element={<Forms />}>
            Forms
          </Link>
        </li>
        <li>
          <Link to="/lorem-ipsum" element={<LoremIpsum />}>
            Lorem Ipsum generator
          </Link>
        </li>
        <li>
          <Link to="/color-generator" element={<ColorGenerator />}>
            Color generator
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Navbar;
