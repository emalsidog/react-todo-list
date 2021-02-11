import React from "react";
import GoogleLogin from "react-google-login";

const Login = props => {
  const { onSubmit, onChange, handleLogin, email, password } = props;
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input onChange={onChange} value={email} type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <input onChange={onChange} value={password} type="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr/>
      <GoogleLogin 
        clientId="1051398545639-mpgsb6eo4esvtvttqq7m9ts6g0du0hb3.apps.googleusercontent.com"
        buttonText="Log In with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
      />
    </div>
  )
}

export default Login;