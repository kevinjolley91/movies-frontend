/* eslint-disable react/prop-types */
export function MoviesShow(props) {
  return (
    <div>
      <h1>{props.movie.title}</h1>
      <img
        src={"https://image.tmdb.org/t/p/original/" + props.movie.poster_path}
        width="300"
        height="450"
        alt={props.movie.title}
      />
      <h4>Release Date: {props.movie.release_date}</h4>
      <h4>{props.movie.overview}</h4>
    </div>
  );
}
