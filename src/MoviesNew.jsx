export function MoviesNew() {
  return (
    <div>
      <h1>New Movie</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Category: <input name="category" type="text" />
        </div>
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
}
