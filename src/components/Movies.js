import { moviesData } from "../data/moviesData";
import "../styles/movie.css";

const Movies = () => {
  return (
    <section className="content">
      <h1 className="title"> Movies list </h1>

      <div className="movie">
        {moviesData.map((movie) => {
          const { id, title, img, releaseDate, director } = movie;
          return (
            <article key={id}>
              <h2 className="movie-title"> Title: {title}</h2>
              <img className="big-imgs" src={img} alt="" />
              <p> Release date: {releaseDate}</p>
              <p> Director: {director} </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Movies;
