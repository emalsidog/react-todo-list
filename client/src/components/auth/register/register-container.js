// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

// Actions
import { userRegister } from "../../../actions/auth";

// Components
import Register from "./register";

const RegisterContainer = (props) => {

  const { t } = useTranslation();

  const [userRegister, setUserRegister] = useState({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const [givenNameError, setGivenNameError] = useState("");
  const [familyNameError, setFamilyNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const validate = () => {
    let givenNameError = "";
    let familyNameError = "";
    let emailError = "";
    let passwordError = "";
    let passwordConfirmError = "";

    const { givenName, familyName, email, password, passwordConfirm } = userRegister;

    if(givenName.length <= 1 || givenName > 15) {
      givenNameError = "Name must be between 2-15 characters";
      setGivenNameError(givenNameError);
    }

    if (familyName.length <= 1 || familyName > 15) {
      familyNameError = "Last name must be between 2-15 characters";
      setFamilyNameError(familyNameError);
    }

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )) {
      emailError = "Email is not valid";
      setEmailError(emailError);
    }

    if(password.length < 6 || password.length > 15) {
      passwordError = "Password length must be between 6-15 characters";
      setPasswordError(passwordError);
    }

    if(passwordConfirm !== password) {
      passwordConfirmError = "Passwords do not match";
      setPasswordConfirmError(passwordConfirmError);
    }


    if(givenNameError || familyNameError || emailError || passwordError || passwordConfirmError) {
      return false;
    }
    return true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if(isValid) {
      props.userRegister(userRegister);
      props.history.push("/accounts/login"); 
    } else {
      console.log("Some errors..");
    }
  }

  const onChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
  }

  return (
    <Register 
      onSubmit={onSubmit} 
      onChange={onChange}
      user={userRegister}
      givenNameError={givenNameError}
      familyNameError={familyNameError}
      emailError={emailError}
      passwordError={passwordError}
      passwordConfirmError={passwordConfirmError}
      t={t} />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    userRegister: (user) => dispatch(userRegister(user))
  }
}

export default connect(null, mapDispatchToProps)(RegisterContainer);