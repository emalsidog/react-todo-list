// Dependencies
import React from "react";

// Components
import LanguageSelect from "../../language-select";

// Styles
import styles from "./bottom-navbar.module.scss";

const BottomNavbar = () => {
    return (
        <nav className={`navbar fixed-bottom navbar-dark ${styles.bottom_navbar}`}>
            <LanguageSelect appearance={false} />
        </nav>
    )
}

export default BottomNavbar;