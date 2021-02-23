// Dependencies
import React from "react";
import { connect } from "react-redux";
import { useTranslation } from 'react-i18next';

// Actions
import { userLogout } from "../../actions/auth";

// Components
import Navbar from "./navbar";

const NavbarHOC = ({ user, userLogout }) => {
  
  const { t } = useTranslation();

  const logoutHandler = () => {
    userLogout();
  }

  return (
    <Navbar t={t} logoutHandler={logoutHandler} user={user} />
  );
}

const mapStateToProps = state => {
  const { user } = state.auth;
  return { user }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarHOC);