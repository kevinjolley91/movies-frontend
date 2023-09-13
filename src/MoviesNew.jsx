/* eslint-disable react/prop-types */
export function MoviesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMovie(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <br />
          <input name="name" type="text" />
        </div>
        <div>
          Image Url:
          <br />
          <input name="image_url" type="text" />
        </div>
        <div>
          Description:
          <br />
          <input name="description" type="text" />
        </div>
        <div>
          Category:
          <br />
          <input name="category" type="text" />
        </div>
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
}
