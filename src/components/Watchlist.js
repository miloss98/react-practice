import React, { useState } from "react";
import { moviesData } from "../data/moviesData";
import "../styles/watchlist.css";

const Watchlist = () => {
  const [movies, setMovies] = useState(moviesData);

  //Filter function which removes clicked item by item's id and makes new watchlist
  const removeMovie = (id) => {
    let newWatchlist = movies.filter((movie) => {
      return movie.id !== id;
    });
    setMovies(newWatchlist);
  };

  if (movies.length === 0) {
    return (
      <section className="empty-list">
        <h3> Watchlist is empty! </h3>
        <button onClick={() => setMovies(moviesData)}> Refresh </button>
      </section>
    );
  }
  return (
    <main>
      <h3> {movies.length} movies on your watchlist.</h3>
      <section>
        {movies.map((movie) => {
          const { id, img, title, director } = movie;
          return (
            <article key={id}>
              <h1> Title: {title} </h1>
              <img className="small-imgs" src={img} alt={title} />
              <p> Director: {director}</p>
              <button className="remove-btn" onClick={() => removeMovie(id)}>
                {" "}
                Remove from list{" "}
              </button>
            </article>
          );
        })}
      </section>
      <div className="button-div">
        <button
          className="clear-all-btn"
          onClick={() => {
            setMovies([]);
          }}
          type="button"
        >
          Clear watchlist
        </button>
      </div>
    </main>
  );
};

export default Watchlist;
