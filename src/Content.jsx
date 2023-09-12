import axios from "axios";
import { useState, useEffect } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { MoviesNew } from "./MoviesNew";
import { MoviesShow } from "./MoviesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { FavoritesIndex } from "./FavoritesIndex";
import { Modal } from "./Modal";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisibile] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorites.son").then((response) => {
      console.log(response.data);
      setUserFavorites(response.data);
    });
  };

  const handleCreateMovie = (params, successCallback) => {
    console.log("handleCreateMovie", params);
    axios.post("http://localhost:3000/movies.json", params).then((response) => {
      setMovies([...movies, response.data]);
      successCallback();
    });
  };

  const handleCreateFavorite = (movieId) => {
    console.log("handleCreateFavorite");
    console.log("Received parameter", movieId);
    const data = { movie_id: movieId };
    axios
      .post("http://localhost:3000/favorites.json", data)
      .then((response) => {
        setFavorites([...favorites, response.data]);
      })
      .catch((error) => console.error("Error creating favorite:", error));
  };

  const handleRemoveFavorite = (movieId) => {
    console.log("handleRemoveFavorite");
    console.log("Received parameter", movieId);
    const data = { movie_id: movieId };
    axios
      .delete("http://localhost:3000/favorites.json", { data: data })
      .catch((error) => console.error("Error deleting favorite:", error));
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

  // useEffect(() => {
  //   axios.get("http://localhost:3000/favorites.json").then((response) => {
  //     setUserFavorites(response.data);
  //   });
  // }, []);

  return (
    <div>
      <Login />
      <LogoutLink />
      <Signup />
      <MoviesNew onCreateMovie={handleCreateMovie} />
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} />
        {userFavorites.some((favorite) => favorite.movie_id === currentMovie.id) ? (
          <button onClick={() => handleRemoveFavorite(currentMovie.id)}>Remove from Favorites</button>
        ) : (
          <button onClick={() => handleCreateFavorite(currentMovie.id)}>Add to Favorites</button>
        )}
      </Modal>
      <FavoritesIndex userFavorites={userFavorites} />
    </div>
  );
}
