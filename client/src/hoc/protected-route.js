// Dependencies
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components
import NavbarHOC from "../components/navbar";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if(!isAuthenticated) {
        return <Redirect to="/accounts/login" />
      }
      return (
        <>
          <NavbarHOC />
          <Component {...props } />
        </>
      );
    }} />
  )
}

const mapStateToProps = state => {
  const { isAuthenticated } = state.auth;
  return { isAuthenticated };
}

export default connect(mapStateToProps, null)(ProtectedRoute);