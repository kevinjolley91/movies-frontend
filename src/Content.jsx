import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesShow } from "./MoviesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { FavoritesIndex } from "./FavoritesIndex";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisibile] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [favorites, setFavorites] = useState([]);

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  };

  const handleSearchMovies = (params) => {
    console.log("handleSearchMovies", params);
    axios.get("http://localhost:3000/movies/search/" + params).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  };

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite");
    console.log("Received parameter", params);
    const data = {
      movie_id: currentMovie.id,
      title: currentMovie.title,
      poster_path: currentMovie.poster_path,
      overview: currentMovie.overview,
      release_date: currentMovie.release_date,
    };
    axios
      .post("http://localhost:3000/favorites.json", data)
      .then((response) => {
        setFavorites([...favorites, response.data]);
      })
      .catch((error) => console.error("Error creating favorite:", error));
    window.location.reload();
  };

  const handleRemoveFavorite = (movieId) => {
    console.log("handleRemoveFavorite");
    console.log("Received parameter", movieId);
    const data = { id: movieId };
    axios
      .delete("http://localhost:3000/favorites.json", { data: data })
      .catch((error) => console.error("Error deleting favorite:", error));
    window.location.reload();
  };

  const handleShowMovie = (movie) => {
    console.log("handleShowMovie", movie);
    setCurrentMovie(movie);
    setIsMoviesShowVisibile(true);
  };

  function handleClose() {
    console.log("handleClose");
    setIsMoviesShowVisibile(false);
    setCurrentMovie({});
  }

  useEffect(handleIndexMovies, []);

  useEffect(handleIndexFavorites, []);

  return (
    <div className="container" id="content-component">
      <div>
        <h1>Search:</h1>
        <input name="query" type="text" />
        <button
          onClick={() => {
            const inputElement = document.querySelector('input[name="query"]');
            const query = inputElement.value;
            handleSearchMovies(query);
          }}
        >
          Search
        </button>
      </div>
      <br />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MoviesIndex movies={movies} onShowMovie={handleShowMovie} />} />
        <Route
          path="/favorites/index"
          element={<FavoritesIndex favorites={favorites} onShowMovie={handleShowMovie} />}
        />
      </Routes>
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <>
          <MoviesShow movie={currentMovie} />
          {favorites.find((favorite) => favorite.movie_id === currentMovie.movie_id) ? (
            <button onClick={() => handleRemoveFavorite(currentMovie.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => handleCreateFavorite(currentMovie)}>Add to Favorites</button>
          )}
        </>
      </Modal>
    </div>
  );
}
