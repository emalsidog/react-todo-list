// Dependencies
import React from "react";
import GoogleLogin from "react-google-login";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Styles
import "../auth.scss";

const Login = (props) => {
  const { onSubmit, onChange, handleLogin, email, password } = props;
  return (
    <>
    <Helmet>
      <title>Todoist | Log In</title>
    </Helmet>
      <form onSubmit={onSubmit} className="ui-form">
        <h3>Log In</h3>

        <div className="form-row">
          <input autoComplete="off" onChange={onChange} id="email" value={email} required type="text" name="email" />
            <label htmlFor="email">Email</label>
        </div>

        <div className="form-row">
          <input onChange={onChange} value={password} required id="password" type="password" name="password" />
            <label htmlFor="password">Password</label>
        </div>
        
        <p>
          <input type="submit" value="Log In" />
        </p>

        <div className="divider"><span>OR</span></div>

        <div className="text-center">
          <GoogleLogin 
            clientId="1051398545639-mpgsb6eo4esvtvttqq7m9ts6g0du0hb3.apps.googleusercontent.com"
            buttonText="Log In with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            theme="dark"
          />
        </div>
      </form>
      <div className="ui-form-2">
        <span>Do not have an account? <Link to="/accounts/register">Register</Link></span>
      </div>
    </>
  );
};

export default Login;
