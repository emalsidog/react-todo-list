// Dependencies
import React from "react";

// Styles
import styles from "./spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
