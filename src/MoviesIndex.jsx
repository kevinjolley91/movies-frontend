/* eslint-disable react/prop-types */
export function MoviesIndex(props) {
  return (
    <div>
      <h1>All Movies</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <button onClick={() => props.onShowMovie(movie)}>More info</button>
        </div>
      ))}
    </div>
  );
}
