import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const movies = [
  {
    title: "Inception",
    img: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
    releaseDate: "2010",
    director: "Cristopher Nolan",
  },
  {
    title: "Interstellar",
    img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    releaseDate: "2014",
    director: "Cristopher Nolan",
  },
  {
    title: "Batman Begins",
    img: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    releaseDate: "2005",
    director: "Cristopher Nolan",
  },
];

const MovieComponent = () => {
  return (
    <>
      <h1 className="title"> Movies list </h1>
      <div className="all">
        {movies.map((movie) => {
          return <Movie movie={movie}></Movie>;
        })}
      </div>
    </>
  );
};

const Movie = ({ movie }) => {
  const { title, img, releaseDate, director } = movie;
  return (
    <article className="movies">
      <div>
        <h2>Title: {title}</h2>
        <img src={img} alt="" />
        <p> Release date: {releaseDate}</p>
        <p> Director: {director} </p>
      </div>
    </article>
  );
};

ReactDOM.render(<MovieComponent />, document.getElementById("root"));
