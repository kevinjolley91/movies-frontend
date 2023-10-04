/* eslint-disable react/prop-types */
import { useState } from "react";

export function MoviesIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="movies-index">
      <h1>All Movies</h1>
      Search:
      <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names" />
      <datalist id="names">
        {props.movies.map((movie) => (
          <option key={movie.id} value={movie.name} />
        ))}
      </datalist>
      <div className="card-deck">
        {props.movies
          .filter((movie) => movie.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((movie) => (
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
