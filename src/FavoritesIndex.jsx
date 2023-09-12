/* eslint-disable react/prop-types */
export function FavoritesIndex(props) {
  return (
    <div>
      <h1>Your Favorites</h1>
      {props.userFavorites.map((userFavorite) => (
        <div key={userFavorite.id}>
          <h2>{userFavorite.movie_id}</h2>
        </div>
      ))}
    </div>
  );
}
