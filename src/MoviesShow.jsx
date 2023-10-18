/* eslint-disable react/prop-types */

export function MoviesShow(props) {
  return (
    <div>
      <h1>Movie Information</h1>
      <h3>{props.movie.title}</h3>
      <img
        src={"https://image.tmdb.org/t/p/original/" + props.movie.poster_path}
        width="200"
        height="300"
        alt={props.movie.title}
      />
      <p>{props.movie.release_date}</p>
      <p>{props.movie.overview}</p>
    </div>
  );
}
