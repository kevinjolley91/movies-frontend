/* eslint-disable react/prop-types */
export function MoviesShow(props) {
  return (
    <div>
      <h1>Movie Information</h1>
      <p>Name: {props.movie.name}</p>
      <img src={props.movie.image_url} width="150" height="225" alt={props.movie.name} />
      <p>Description: {props.movie.description}</p>
      <p>Category: {props.movie.category}</p>
    </div>
  );
}
