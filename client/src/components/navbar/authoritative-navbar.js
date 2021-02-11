// Dependencies
import React from "react";
import { Link } from "react-router-dom";

const AuthoritativeNavbar = ({ user, logoutHandler }) => {
  const { givenName, familyName, email } = user;
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
              <button className="btn btn-primary" type="button" onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <span>Welcome, {`${givenName} ${familyName} (${email})`}</span>
        </div>
      </div>
    </nav>
  );
}

export default AuthoritativeNavbar;