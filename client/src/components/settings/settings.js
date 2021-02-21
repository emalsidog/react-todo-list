// Dependencies
import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

// Styles
import "./settings.scss";

const Settings = () => {

    const { t, i18n } = useTranslation();

    const languagesList = [{ abbr: "en", name: t("English") }, { abbr: "ru", name: t("Russian") }];

    const handleChange = e => {
        i18n.changeLanguage(e.target.value);
    }
 
    return (
        <>
            <Helmet>
                <title>Todoist | {t("Settings")}</title>
            </Helmet>
            <div className="container">
            <h4>{t("Settings")}</h4>

            <div className="row my-4 settings-row">
                <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg setting-name">
                    {t("Language")}
                </div>
                <div className="col-auto me-auto"> 
                    <select defaultValue={localStorage.getItem("i18nextLng")} className="form-select form-select-dark" onChange={handleChange}>
                        {
                            languagesList.map((lang, idx) => <option key={idx} value={lang.abbr}>{ lang.name }</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
        </>
    );
}

export default Settings;