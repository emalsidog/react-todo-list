// Dependencies
import React from "react";
import { Link } from "react-router-dom";

const UnauthoritativeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">React Authentication</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accounts/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accounts/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UnauthoritativeNavbar;