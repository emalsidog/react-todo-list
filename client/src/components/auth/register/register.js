// Dependencies
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Components
import BottomNavbar from "../bottom-navbar";

// Styles
import styles from "../auth.module.scss";

const Register = props => {
  const { onSubmit, onChange, user, givenNameError, familyNameError, emailError, passwordError, passwordConfirmError, t } = props
  const { givenName, familyName, email, password, passwordConfirm } = user;
  return (
    <>
      <Helmet>
        <title>Todoist | {t("Register")}</title>
      </Helmet>
      <form onSubmit={onSubmit} className={styles.ui_form}>
        <h3>{t("Register")}</h3>
          <div className={styles.form_row}>
            <input autoComplete="off" id="givenName" required value={givenName} name="givenName" type="text" onChange={onChange} />
            <label htmlFor="givenName">{t("Given name")}</label>
            <div className={styles.error_message}>{givenNameError}</div>
          </div>
          <div className={styles.form_row}>
            <input autoComplete="off" id="familyName" required value={familyName} name="familyName" type="text" onChange={onChange} />
            <label htmlFor="familyName">{t("Family name")}</label>
            <div className={styles.error_message}>{familyNameError}</div>
          </div>
          <div className={styles.form_row}>
            <input autoComplete="off" id="email" required value={email} name="email" type="text" onChange={onChange} />  
            <label htmlFor="email">{t("Email")}</label>
            <div className={styles.error_message}>{emailError}</div>
          </div>
          <div className={styles.form_row}>
            <input autoComplete="off" id="password" required value={password} name="password" type="password" onChange={onChange} />  
            <label htmlFor="password">{t("Password")}</label>
            <div className={styles.error_message}>{passwordError}</div>
          </div>
          <div className={styles.form_row}>
            <input autoComplete="off" id="passwordConfirm" required value={passwordConfirm} name="passwordConfirm" type="password" onChange={onChange} />  
            <label htmlFor="passwordConfirm">{t("Confirm password")}</label>
            <div className={styles.error_message}>{passwordConfirmError}</div>
          </div>
          <p>
            <input type="submit" value={t("Register")} />
          </p>
      </form>
      <div className={styles.ui_form_2}>
        <span>{t("Already have an account?")} <Link to="/accounts/login">{t("Log In")}</Link></span>
      </div>

      <BottomNavbar />
    </>
  );
}

export default Register;