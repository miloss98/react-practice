import React, { useState } from "react";
import { watchListData } from "../data/watchlist";
import "../styles/watchlist.css";

const Watchlist = () => {
  const [movies, setMovies] = useState(watchListData);

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
        <button onClick={() => setMovies(watchListData)}> Refresh </button>
      </section>
    );
  }
  return (
    <main>
      <h3> {movies.length} movies on your watchlist.</h3>
      <section>
        {movies.map((movie) => {
          const { id, image, title, rating } = movie;
          return (
            <article key={id}>
              <h1> Title: {title} </h1>
              <img className="small-imgs" src={image} alt={title} />
              <p> Rating: {rating}</p>
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
