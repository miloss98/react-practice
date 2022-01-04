import { useState } from "react";

const Movie = (props) => {
  const { title, img, releaseDate, director } = props;
  // useState basic example
  const [text, setText] = useState("click me to change me");
  const textChange = () => {
    if (text === "click me to change me") {
      setText("my text changed");
    } else {
      setText("click me to change me");
    }
  };

  return (
    <article className="movies">
      <div>
        <h2> Title: {title}</h2>
        <img src={img} alt="" />
        <p> Release date: {releaseDate}</p>
        <p> Director: {director} </p>
        <button type="button" onClick={() => textChange()}>
          {text}
        </button>
      </div>
    </article>
  );
};
export default Movie;
