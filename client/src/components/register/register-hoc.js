// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { userRegister } from "../../actions/auth";

// Components
import Register from "./register";

const RegisterHOC = (props) => {

  const [userRegister, setUserRegister] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    props.userRegister(userRegister);
    props.history.push("/accounts/login");
  }

  const onChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
  }

  return (
    <Register 
      onSubmit={onSubmit} 
      onChange={onChange}
      user={userRegister} />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    userRegister: (user) => dispatch(userRegister(user))
  }
}

export default connect(null, mapDispatchToProps)(RegisterHOC);