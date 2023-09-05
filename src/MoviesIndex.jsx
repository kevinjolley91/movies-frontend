/* eslint-disable react/prop-types */
export function MoviesIndex(props) {
  return (
    <div>
      <h1>All Movies</h1>
      {props.movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <h4>{movie.description}</h4>
          <h4>Category: {movie.category}</h4>
        </div>
      ))}
    </div>
  );
}
