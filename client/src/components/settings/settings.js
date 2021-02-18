// Dependencies
import React from "react";
import { useTranslation } from "react-i18next";

// Styles
import "./settings.scss";

const Settings = () => {

    const { i18n } = useTranslation();

    const handleChange = e => {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <div className="container">
            <h4>Settings</h4>

            <div className="row">
                <div className="col">
                    Language
                </div>
                <div className="col">
                    <select onChange={handleChange}>
                        <option value="en">English</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>
            </div>

        </div>
    );
}

export default Settings;