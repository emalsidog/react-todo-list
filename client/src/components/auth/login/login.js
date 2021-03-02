// Dependencies
import React from "react";
import GoogleLogin from "react-google-login";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Components
import TopNavbar from "../top-navbar";

// Styles
import styles from "../auth.module.scss";

const Login = (props) => {
  const { onSubmit, onChange, handleLogin, email, password, t } = props;
  return (
    <>
    <Helmet>
      <title>Todoist | {t("Log In")}</title>
    </Helmet>
      <TopNavbar />
      <form onSubmit={onSubmit} className={styles.ui_form}>
        <h3>{t("Log In")}</h3>

        <div className={styles.form_row}>
          <input autoComplete="off" onChange={onChange} id="email" value={email} required type="text" name="email" />
            <label htmlFor="email">{t("Email")}</label>
        </div>

        <div className={styles.form_row}>
          <input onChange={onChange} value={password} required id="password" type="password" name="password" />
            <label htmlFor="password">{t("Password")}</label>
        </div>
        
        <p>
          <input type="submit" value={t("Log In")} />
        </p>

        <div className={styles.divider}><span>{t("OR")}</span></div>

        <div className="text-center">
          <GoogleLogin 
            clientId="1051398545639-mpgsb6eo4esvtvttqq7m9ts6g0du0hb3.apps.googleusercontent.com"
            buttonText={t("Log In with Google")}
            onSuccess={handleLogin}
            onFailure={handleLogin}
            theme="dark"
          />
        </div>
      </form>
      <div className={styles.ui_form_2}>
        <span>{t("Do not have an account?")} <Link to="/accounts/register">{t("Register")}</Link></span>
      </div>
    </>
  );
};

export default Login;