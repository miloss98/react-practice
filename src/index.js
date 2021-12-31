import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const inception = {
  title: "Inception",
  img: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
  releaseDate: "2010",
  director: "Cristopher Nolan",
};

const interstellar = {
  title: "Interstellar",
  img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  releaseDate: "2014",
  director: "Cristopher Nolan",
};

const MovieComponent = () => {
  return (
    <>
      <div className="all">
        <div className="book">
          <Movie
            title={inception.title}
            img={inception.img}
            releaseDate={inception.releaseDate}
            director={inception.director}
          />
        </div>
        <div className="book">
          <Movie
            title={interstellar.title}
            img={interstellar.img}
            releaseDate={interstellar.releaseDate}
            director={interstellar.director}
          />
        </div>
      </div>
    </>
  );
};

const Movie = ({ title, img, releaseDate, director }) => {
  return (
    <article>
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
