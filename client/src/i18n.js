// Dependencies
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Locales
import translationEN from "./assets/locales/en/translation.json";
import translationRU from "./assets/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;