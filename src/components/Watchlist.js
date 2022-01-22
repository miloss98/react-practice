import React, { useState } from "react";
import { moviesData } from "../moviesData";
import "../styles/watchlist.css";

const Watchlist = () => {
  const [movies, setMovies] = useState(moviesData);
  return (
    <main>
      <section>
        <h3> {movies.length} movies on your watchlist.</h3>
        {movies.map((movie) => {
          const { id, img, title, releasedate, director } = movie;
          return (
            <article key={id}>
              <img src={img} alt={title} />
              <h1> Title: {title} </h1>
              <p> Release date: {releasedate} </p>
              <p> Director: {director}</p>
              <button className="remove-btn" type="button">
                {" "}
                Remove from list{" "}
              </button>
            </article>
          );
        })}
        <button
          className="clear-all-btn"
          onClick={() => {
            setMovies([]);
          }}
          type="button"
        >
          Clear watchlist
        </button>
      </section>
    </main>
  );
};

export default Watchlist;
