/* eslint-disable react/prop-types */

export function MoviesShow(props) {
  return (
    <div>
      <h1>Movie Information</h1>
      <h3>{props.movie.title}</h3>
      <img src={props.movie.image_url} width="200" height="300" alt={props.movie.name} />
      <p>{props.movie.description}</p>
      <p>Category: {props.movie.category}</p>
    </div>
  );
}
