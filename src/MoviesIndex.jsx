/* eslint-disable no-unused-vars */
import React, { useRef } from "react";

export function MoviesIndex(props) {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const query = inputRef.current.value;
      props.onSearchMovies(query);
    }
  };

  return (
    <div id="movies-index">
      {props.showSearch && (
        <div>
          <h1>Search:</h1>
          <input name="query" type="text" ref={inputRef} onKeyPress={handleKeyPress} />
          <button
            onClick={() => {
              const query = inputRef.current.value;
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
