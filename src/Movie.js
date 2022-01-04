const showAlert = () => {
  alert("alert!!");
};

const Movie = (props) => {
  const { title, img, releaseDate, director } = props;
  const hover = () => {
    alert(`You are hovering: ${title}`);
  };
  return (
    <article className="movies">
      <div>
        <h2 onMouseOver={hover}> Title: {title}</h2>
        <img src={img} alt="" />
        <p> Release date: {releaseDate}</p>
        <p> Director: {director} </p>
        <button type="button" onClick={showAlert}>
          Click me
        </button>
      </div>
    </article>
  );
};
export default Movie;
