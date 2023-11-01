import { Link } from "react-router-dom";
import { LogoutLink } from "./Logout";

export function Header() {
  const loggedIn = localStorage.getItem("jwt");

  return loggedIn ? (
    <nav className="navbar">
      <Link to="/">All Movies</Link> | <Link to="/movies/search">Search</Link> |
      <Link to="favorites/index"> Your Favorites</Link> | <LogoutLink>Logout</LogoutLink> |{" "}
      <Link to="/about">About</Link>
    </nav>
  ) : (
    <nav className="navbar">
      <Link to="/">All Movies</Link> | <Link to="/movies/search">Search</Link> |
      <Link to="favorites/index"> Your Favorites</Link> | <Link to="/signup"> Signup</Link> |
      <Link to="/login"> Login</Link>| <Link to="/about">About</Link>
    </nav>
  );
}
