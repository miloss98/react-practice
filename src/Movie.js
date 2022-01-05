import { useState } from "react";

const Movie = (props) => {
  const { title, img, releaseDate, director } = props;
  // useState basic example
  const [movie, setMovie] = useState({
    country: "America",
    runtime: "2h30min",
    age: "18+",
  });

  const changeNumber = () => {
    setMovie({ ...movie, runtime: "1h45min" });
  };

  return (
    <article className="movies">
      <div>
        <h2> Title: {title}</h2>
        <img src={img} alt="" />
        <p> Release date: {releaseDate}</p>
        <p> Director: {director} </p>
        <p> Runtime: {movie.runtime}</p>
        <button type="button" onClick={changeNumber}>
          Change number
        </button>
      </div>
    </article>
  );
};
export default Movie;
