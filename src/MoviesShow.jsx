/* eslint-disable react/prop-types */

export function MoviesShow(props) {
  return (
    <div>
      <h1>Movie Information</h1>
      <h3>{props.movie.name}</h3>
      <img src={props.movie.image_url} width="150" height="225" alt={props.movie.name} />
      <p>{props.movie.description}</p>
      <p>Category: {props.movie.category}</p>
    </div>
  );
}
