const Movie = (props) => {
  const { title, img, releaseDate, director } = props;

  return (
    <article className="movies">
      <div>
        <h2> Title: {title}</h2>
        <img src={img} alt="" />
        <p> Release date: {releaseDate}</p>
        <p> Director: {director} </p>
      </div>
    </article>
  );
};
export default Movie;
