const Movie = (props) => {
  const { title, img, releaseDate, director } = props;

  return (
    <article>
      <div>
        <h2 className="movie-title"> Title: {title}</h2>
        <img className="big-imgs" src={img} alt="" />
        <p> Release date: {releaseDate}</p>
        <p> Director: {director} </p>
      </div>
    </article>
  );
};
export default Movie;
