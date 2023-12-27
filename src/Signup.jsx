import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="text-5xl">Signup</h1>
      <br />
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="text-3xl">
          Name:
          <br />
          <input name="name" type="text" />
        </div>
        <div className="text-3xl">
          Email:
          <br />
          <input name="email" type="email" />
        </div>
        <div className="text-3xl">
          Password:
          <br />
          <input name="password" type="password" />
        </div>
        <div className="text-3xl">
          Password confirmation:
          <br />
          <input name="password_confirmation" type="password" />
        </div>
        <div className="text-3xl">
          Image Url:
          <br />
          <input name="image_url" type="text" />
        </div>
        <button className="btn btn-primary bg-blue-500" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
