// Dependencies
import React from "react";
import { connect } from "react-redux";

// Actions
import { userLogout } from "../../actions/auth";

// Components
import AuthoritativeNavbar from "./authoritative-navbar";
import UnauthoritativeNavbar from "./unauthoritative-navbar";

const Navbar = ({ isAuthenticated, user, userLogout }) => {
  
  const logoutHandler = () => {
    userLogout();
  }

  return (
    <div>
      { 
        isAuthenticated ?
         <AuthoritativeNavbar logoutHandler={logoutHandler} user={user} /> :
         <UnauthoritativeNavbar />
      }
    </div>
  );
}

const mapStateToProps = state => {
  const { isAuthenticated, user } = state.auth;
  return {
    isAuthenticated,
    user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);