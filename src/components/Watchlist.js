import React, { useState } from "react";
import { moviesData } from "../moviesData";

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
            </article>
          );
        })}
        <button
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
