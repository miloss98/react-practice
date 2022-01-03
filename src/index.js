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
    title: "Batman  ",
    img: "https://cdn1.epicgames.com/undefined/offer/batman-arkham-asylum_promo-1567x917-f1248a17909e224f91845b223542306a.jpg",
    releaseDate: "2009",
    director: "Cristopher Nolan",
  },
];

const MovieComponent = () => {
  return (
    <>
      <div className="all">
        {movies.map((movie) => {
          return <Movie movie={movie}></Movie>;
        })}
      </div>
    </>
  );
};

const Movie = (props) => {
  const { title, img, releaseDate, director } = props.movie;
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
