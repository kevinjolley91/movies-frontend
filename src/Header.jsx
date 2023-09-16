import { Link } from "react-router-dom";
import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <nav className="navbar">
      <Link to="/">All Movies</Link> | <Link to="/movies/new">New Movie</Link> |
      <Link to="favorites/index"> Your Favorites</Link> | <Link to="/signup"> Signup</Link> |
      <Link to="/login"> Login</Link> | <LogoutLink>Logout</LogoutLink> | <Link to="/about">About</Link>
    </nav>
  );
}
