/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Your Favorites</h1>
      {props.userFavorites.map((userFavorite) => (
        <div key={userFavorite.id}>
          <h2>{userFavorite.movie.name}</h2>
          <p>{userFavorite.movie.description}</p>
        </div>
      ))}
    </div>
  );
}
