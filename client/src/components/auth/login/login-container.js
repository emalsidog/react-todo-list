// Dependencies
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

// Actions
import { userLogin, userGoogleLogin } from "../../../actions/auth";

// Components
import Login from "./login";

const LoginContainer = ({ userLogin, userGoogleLogin, isAuthenticated, history }) => {

  const [user, setUser] = useState({ email: "", password: "" });
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  const onSubmit = e => {
    e.preventDefault();
    userLogin(user);
  }

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleLogin = googleData => {
    userGoogleLogin(googleData);
  };

  return (
    <Login 
      email={user.email}
      password={user.password}
      onSubmit={onSubmit}
      onChange={onChange}
      handleLogin={handleLogin}
      t={t} />
  );
}

const mapStateToProps = state => {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
    userGoogleLogin: (googleData) => dispatch(userGoogleLogin(googleData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);