// Dependencies
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

// Actions
import { setCurrentUser } from "../../actions/auth";

// Components
import ProtectedRoute from "../../hoc/protected-route";
import UnprotectedRoute from "../../hoc/unprotected-route";
import { LoginContainer, RegisterContainer } from "../auth";
import Home from "../home";
import Leaderboard from "../leaderboard";
import About from "../about";
import Settings from "../settings";
import TodoMenu from "../todo-menu";

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
        <ProtectedRoute exact path="/leaderboard" component={Leaderboard} />
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute exact path="/settings" component={Settings} />
        <UnprotectedRoute exact path="/accounts/login" component={LoginContainer} />
        <UnprotectedRoute exact path="/accounts/register" component={RegisterContainer} />
        <ProtectedRoute exact path="/:id" component={TodoMenu} />
        <Route render={() => <h1>404</h1>} />
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