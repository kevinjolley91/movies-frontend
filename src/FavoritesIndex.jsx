/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Your Favorites</h1>
      {props.userFavorites.map((userFavorite) => (
        <div key={userFavorite.id}>
          <h2>{userFavorite.movie.name}</h2>
          <img src={userFavorite.movie.image_url} width="200" height="300" alt={userFavorite.movie.name} />
          <br />
          <button onClick={() => props.onShowMovie(userFavorite.movie)}>More info</button>
        </div>
      ))}
    </div>
  );
}
