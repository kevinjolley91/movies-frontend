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
        console.log("response.data");
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.errors);
        setErrors(errors.response.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" name="name" />
        </div>
        <div>
          Email: <input type="email" name="email" />
        </div>
        <div>
          Password: <input type="password" name="password" />
        </div>
        <div>
          Password Confirmation: <input type="password" name="password_confirmation" />
        </div>
        <div>
          Image Url: <input type="text" name="image_url" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
