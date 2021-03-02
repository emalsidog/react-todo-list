// Dependencies
import React from "react";

// Components
import LanguageSelect from "../../language-select";

// Styles
import styles from "./top-navbar.module.scss";

const TopNavbar = () => {
    return (
        <nav className={`navbar fixed-top navbar-dark ${styles.bottom_navbar}`}>
            <LanguageSelect authPage={true} />
        </nav>
    )
}

export default TopNavbar;