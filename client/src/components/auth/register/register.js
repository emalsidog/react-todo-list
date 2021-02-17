// Dependencies
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Styles
import "../auth.scss";

const Register = ({ onSubmit, onChange, user }) => {
  const { givenName, familyName, email, password, passwordConfirm } = user;
  return (
    <>
      <Helmet>
        <title>Todoist | Register</title>
      </Helmet>
      <form onSubmit={onSubmit} className="ui-form">
        <h3>Register</h3>
          <div className="form-row">
            <input autoComplete="off" id="givenName" required value={givenName} name="givenName" type="text" onChange={onChange} />
            <label htmlFor="givenName">First name</label>
          </div>
          <div className="form-row">
            <input autoComplete="off" id="familyName" required value={familyName} name="familyName" type="text" onChange={onChange} />
            <label htmlFor="familyName">Family name</label>
          </div>
          <div className="form-row">
            <input autoComplete="off" id="email" required value={email} name="email" type="text" onChange={onChange} />  
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-row">
            <input autoComplete="off" id="password" required value={password} name="password" type="password" onChange={onChange} />  
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-row">
            <input autoComplete="off" id="passwordConfirm" required value={passwordConfirm} name="passwordConfirm" type="password" onChange={onChange} />  
            <label htmlFor="passwordConfirm">Confirm password</label>
          </div>
          <p>
            <input type="submit" value="Register" />
          </p>
      </form>
      <div className="ui-form-2">
        <span>Already have an account? <Link to="/accounts/login">Log In</Link></span>
      </div>
    </>
  );
}

export default Register;