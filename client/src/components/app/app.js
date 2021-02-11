// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// Actions
import { setCurrentUser } from "../../actions/auth";

// Components
import UnprotectedRoute from "../../hoc/unprotected-route";
import Navbar from "../navbar";
import LoginHOC from "../login";
import RegisterHOC from "../register";
import Home from "../home";;

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <UnprotectedRoute exact path="/login" component={LoginHOC} />
        <UnprotectedRoute exact path="/register" component={RegisterHOC} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: () => dispatch(setCurrentUser())
  }
};

export default connect(null, mapDispatchToProps)(App);