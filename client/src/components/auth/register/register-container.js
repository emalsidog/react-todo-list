// Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

// Actions
import { userRegister } from "../../../actions/auth";

// Components
import Register from "./register";

// Regexp
const emailRexexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRexexp = /^[a-zA-Zа-яёА-ЯЁ]+$/;
const passwordRexexp = /^[a-zA-Z0-9]+$/;

const RegisterContainer = ({ userRegister, history }) => {

  const { t } = useTranslation();

  const [userRegisterData, setUserRegisterData] = useState({
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

    const { givenName, familyName, email, password, passwordConfirm } = userRegisterData;

    // Given name verifying
    if(givenName.length <= 1 || givenName.length > 15) {
      givenNameError = "Given name must be between 2 and 15 characters long";
      setGivenNameError(givenNameError);
    } else if (!nameRexexp.test(givenName)) {
      givenNameError = "Given name must be only letters";
      setGivenNameError(givenNameError);
    } else {
      givenNameError = "";
      setGivenNameError(givenNameError);
    }

    // Family name verifying
    if (familyName.length <= 1 || familyName.length > 15) {
      familyNameError = "Family name must be between 2 and 15 characters long";
      setFamilyNameError(familyNameError);
    } else if (!nameRexexp.test(familyName)) {
      familyNameError = "Family name must be only letters";
      setFamilyNameError(familyNameError);
    } else {
      familyNameError = "";
      setFamilyNameError(familyNameError);
    }

    // Email verifying
    if(!emailRexexp.test(email)) {
      emailError = "Email is not valid";
      setEmailError(emailError);
    } else {
      emailError = "";
      setEmailError(emailError);
    }

    // Password/password confirm verifying
    if(password.length < 6 || password.length > 15) {
      passwordError = "Password must be between 6 and 15 characters long";
      setPasswordError(passwordError);
    } else if(!passwordRexexp.test(password)) {
      passwordError = "Password must be only letters and numbers";
      setPasswordError(passwordError);
    } else {
      passwordError = "";
      setPasswordError(passwordError);
    }

    if(passwordConfirm !== password) {
      passwordConfirmError = "Passwords do not match";
      setPasswordConfirmError(passwordConfirmError);
    } else {
      passwordConfirmError = "";
      setPasswordConfirmError(passwordConfirmError);
    }


    if(givenNameError || familyNameError || emailError || passwordError || passwordConfirmError) {
      return false;
    }
    return true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(validate()) {
      userRegister(userRegisterData);
      history.push("/accounts/login");
    }
  }

  const onChange = (e) => {
    setUserRegisterData({ ...userRegisterData, [e.target.name]: e.target.value })
  }

  return (
    <Register onSubmit={onSubmit} onChange={onChange} user={userRegister} givenNameError={givenNameError} familyNameError={familyNameError} emailError={emailError} passwordError={passwordError} passwordConfirmError={passwordConfirmError} t={t} />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    userRegister: (user) => dispatch(userRegister(user))
  }
}

export default connect(null, mapDispatchToProps)(RegisterContainer);