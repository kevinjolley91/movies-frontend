/* eslint-disable react/prop-types */

export function FavoritesShow(props) {
  return (
    <div>
      <h1>Favorite Movie Information</h1>
      <h3>{props.favorite.movie_title}</h3>
      <img
        src={"https://image.tmdb.org/t/p/original/" + props.favorite.movie_poster_path}
        width="300"
        height="450"
        alt={props.favorite.movie_title}
      />
      <h4>Release Date: {props.favorite.movie_release_date}</h4>
      <h4>{props.favorite.movie_overview}</h4>
      <h4>{props.favorite.id}</h4>
    </div>
  );
}