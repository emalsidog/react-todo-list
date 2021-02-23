// Dependencies
import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

// Components
import LanguageSelect from "../language-select";

// Styles
import "./settings.scss";

const Settings = () => {

    const { t } = useTranslation();
 
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
                    <LanguageSelect />
                </div>
            </div>
        </div>
        </>
    );
}

export default Settings;