/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Your Favorites</h1>
      <div className="card-group">
        {props.userFavorites.map((userFavorite) => (
          <div key={userFavorite.id} className="card">
            <img
              className="card-img-top"
              src={userFavorite.movie.image_url}
              width="200"
              height="300"
              alt={userFavorite.movie.name}
            />
            <div className="card-body">
              <h2 className="card-title">{userFavorite.movie.name}</h2>
              <button onClick={() => props.onShowMovie(userFavorite.movie)}>More info</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
