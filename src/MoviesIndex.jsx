/* eslint-disable react/prop-types */

export function MoviesIndex(props) {
  return (
    <div id="movies-index">
      {props.showSearch && (
        <div>
          <h1>Search:</h1>
          <input name="query" type="text" />
          <button
            onClick={() => {
              const inputElement = document.querySelector('input[name="query"]');
              const query = inputElement.value;
              props.onSearchMovies(query);
            }}
          >
            Search
          </button>
        </div>
      )}
      <br />
      <div className="card-deck">
        {props.movies.map((movie) => (
          <div key={movie.id} className="card">
            <img
              className="card-img-top"
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              width="200"
              height="300"
              alt={movie.title}
            />
            <div className="card-body">
              <h4 className="card-title">{movie.title}</h4>
              <button onClick={() => props.onShowMovie(movie)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
