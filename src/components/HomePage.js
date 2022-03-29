import React from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";
import Watchlist from "./Watchlist";
import Users from "./Users";
import Counter from "./Counter";
import Forms from "./Forms";
import LoremIpsum from "./LoremIpsum";
import ColorGenerator from "./ColorGenerator";

const HomePage = () => {
  return (
    <div>
      <div> Welcome to Home page</div>
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
    </div>
  );
};

export default HomePage;
