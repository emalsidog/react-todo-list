// Dependencies
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UnprotectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      if(isAuthenticated) {
        return <Redirect to="/" />
      }
      return <Component {...props } />
    }} />
  )
}

const mapStateToProps = state => {
  const { isAuthenticated } = state.auth;
  return { isAuthenticated };
}

export default connect(mapStateToProps, null)(UnprotectedRoute);