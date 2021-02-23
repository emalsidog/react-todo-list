// Dependencies
import React from "react";
import { useTranslation } from "react-i18next";

// Styles
import styles from "./language-select.module.scss";

const LanguageSelect = ({ appearance }) => {
    const { t, i18n } = useTranslation();

    const languagesList = [{ abbr: "en", name: t("English") }, { abbr: "ru", name: t("Russian") }];
    let classNames = `${styles.form_select} ${styles.form_select_dark}`;

    if(!appearance) {
        classNames += ` ${styles.appearance_none}`;
    }

    const handleChange = e => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <select defaultValue={localStorage.getItem("i18nextLng")} className={classNames} onChange={handleChange}>
            {
                languagesList.map((lang, idx) => <option key={idx} value={lang.abbr}>{ lang.name }</option>)
            }
        </select>
    )
}

export default LanguageSelect;