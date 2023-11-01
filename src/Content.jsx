import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
// import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { FavoritesIndex } from "./FavoritesIndex";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Search } from "./Search";

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

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.son").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  // const handleCreateMovie = (params, successCallback) => {
  //   console.log("handleCreateMovie", params);
  //   axios.post("http://localhost:3000/movies.json", params).then((response) => {
  //     setMovies([...movies, response.data]);
  //     successCallback();
  //   });
  // };

  const handleCreateFavorite = (params) => {
    console.log("handleCreateFavorite");
    console.log("Received parameter", params);
    const data = {
      movie_id: currentMovie.id,
      movie_title: currentMovie.title,
      movie_poster_path: currentMovie.poster_path,
      movie_overview: currentMovie.overview,
      movie_release_date: currentMovie.release_date,
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
    const data = { movie_id: movieId };
    axios
      .delete("http://localhost:3000/favorites.json", { data: data })
      .catch((error) => console.error("Error deleting favorite:", error));
    window.location.reload();
  };

  const handleShowMovie = (movie) => {
    console.log("handleShowMovie", movie);
    setIsMoviesShowVisibile(true);
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsMoviesShowVisibile(false);
  };

  useEffect(handleIndexMovies, []);

  useEffect(handleIndexFavorites, []);

  return (
    <div className="container" id="content-component">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="/movies/new" element={<MoviesNew onCreateMovie={handleCreateMovie} />} /> */}
        <Route path="/" element={<MoviesIndex movies={movies} onShowMovie={handleShowMovie} />} />
        <Route
          path="/favorites/index"
          element={<FavoritesIndex favorites={favorites} onShowMovie={handleShowMovie} />}
        />
      </Routes>
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} />
        {favorites.some((favorite) => favorite.movie_id == currentMovie.id) ? (
          <button onClick={() => handleRemoveFavorite(currentMovie.id)}>Remove from Favorites</button>
        ) : (
          <button onClick={() => handleCreateFavorite(currentMovie)}>Add to Favorites</button>
        )}
      </Modal>
    </div>
  );
}
