// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./navbar.scss";

const Navbar = ({ user, logoutHandler }) => {
  const { givenName, familyName } = user;
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Todoist</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle dropdown-button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              {`${givenName} ${familyName}`}
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
              <li>
                <button 
                  onClick={logoutHandler} 
                  className="dropdown-item" 
                  type="button">Logout</button>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <Link className="dropdown-item" to="/about">About</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;