import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <h1>Chuck Norris 'jokes'</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/keywords">Keywords</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
