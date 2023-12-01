/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { LogoutLink } from "./Logout";

export function Header() {
  const loggedIn = localStorage.getItem("jwt");

  return loggedIn ? (
    <div className="head-tag">
      <nav className="bg-light">
        <Link to="/">Home</Link> |<Link to="favorites/index"> Your Favorites</Link> | <LogoutLink>Logout</LogoutLink> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <h1 style={{ fontSize: "6rem" }}>What to Watch</h1>
    </div>
  ) : (
    <div className="head-tag">
      <nav className="navbar">
        <Link to="/">Home</Link> |<Link to="favorites/index"> Your Favorites</Link> | <Link to="/signup"> Signup</Link>{" "}
        |<Link to="/login"> Login</Link>| <Link to="/about">About</Link>
      </nav>
      <h1 style={{ fontSize: "6rem" }}>What to Watch</h1>
    </div>
  );
}
