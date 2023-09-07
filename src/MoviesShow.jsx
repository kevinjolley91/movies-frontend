/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

export function MoviesShow(props) {
  const [favorites, setFavorites] = useState([]);

  const handleCreateFavorite = (event) => {
    event.preventDefault();
    console.log("handleCreateFavorite");
    axios.post("http://localhost:3000/favorites.json").then((response) => {
      setFavorites([...favorites, response.data]);
    });
  };

  return (
    <div>
      <h1>Movie Information</h1>
      <h3>{props.movie.name}</h3>
      <img src={props.movie.image_url} width="150" height="225" alt={props.movie.name} />
      <p>{props.movie.description}</p>
      <p>Category: {props.movie.category}</p>
      <button onClick={(event) => handleCreateFavorite(event, props.movie.id)}>Add to Favorites</button>
    </div>
  );
}
