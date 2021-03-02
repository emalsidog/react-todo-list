// Dependencies
import React from "react";

// Styles
import styles from "./alert.module.scss";

const Alert = ({ message, isError, t }) => {
  let classNames = `fixed-bottom alert-dismissible fade show alert ${styles.my_alert}`;
  if(isError) {
    classNames += " alert-danger";
  } else {
    classNames += " alert-success";
  }

  return (
    <div className={classNames} role="alert">
      { t(message) }
    </div>
  );
}

export default Alert