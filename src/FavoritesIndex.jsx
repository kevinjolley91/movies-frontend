/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="card-deck">
        {props.userFavorites.map((userFavorite) => (
          <div key={userFavorite.id} className="card">
            <img
              className="card-img-top"
              src={"https://image.tmdb.org/t/p/original/" + props.movie.poster_path}
              width="200"
              height="300"
              alt={props.movie.title}
            />
            <div className="card-body">
              <h2 className="card-title">{props.movie.title}</h2>
              <button onClick={() => props.onShowMovie(props.movie)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
