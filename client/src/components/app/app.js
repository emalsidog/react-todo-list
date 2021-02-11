// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";

// Actions
import { setCurrentUser } from "../../actions/auth";

// Components
import ProtectedRoute from "../../hoc/protected-route";
import UnprotectedRoute from "../../hoc/unprotected-route";
import LoginHOC from "../login";
import RegisterHOC from "../register";
import Home from "../home";

// Styles
import "./app.scss";

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    setCurrentUser();
  }, [setCurrentUser]);

  return(
    <>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <UnprotectedRoute exact path="/accounts/login" component={LoginHOC} />
        <UnprotectedRoute exact path="/accounts/register" component={RegisterHOC} />
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