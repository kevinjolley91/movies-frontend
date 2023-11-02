/* eslint-disable react/prop-types */
export function MoviesShow(props) {
  const { movie, favorite } = props;

  const displayDetails = () => {
    if (favorite) {
      return (
        <div>
          <h1>{movie.movie_title}</h1>
          <img
            src={"https://image.tmdb.org/t/p/original/" + movie.movie_poster_path}
            width="300"
            height="450"
            alt={movie.movie_title}
          />
          <h4>Release Date: {movie.movie_release_date}</h4>
          <h4>{movie.movie_overview}</h4>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            width="300"
            height="450"
            alt={movie.title}
          />
          <h4>Release Date: {movie.release_date}</h4>
          <h4>{movie.overview}</h4>
        </div>
      );
    }
  };

  return <div>{displayDetails()}</div>;
}
