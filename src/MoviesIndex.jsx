/* eslint-disable react/prop-types */
export function MoviesIndex(props) {
  return (
    <div>
      <h1>All Movies</h1>
      <div className="card-group">
        {props.movies.map((movie) => (
          <div key={movie.id} className="card">
            <img className="card-img-top" src={movie.image_url} width="200" height="300" alt={movie.name} />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <button onClick={() => props.onShowMovie(movie)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
