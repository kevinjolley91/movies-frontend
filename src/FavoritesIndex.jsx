/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="card-deck">
        {props.favorites.map((favorite) => (
          <div key={favorite.id} className="card">
            <img
              className="card-img-top"
              src={"https://image.tmdb.org/t/p/original/" + favorite.poster_path}
              width="200"
              height="300"
              alt={favorite.title}
            />
            <div className="card-body">
              <h2 className="card-title">{favorite.title}</h2>
              <button onClick={() => props.onShowMovie(favorite)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
