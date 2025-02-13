"use client";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: "en" | "fa") => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  };

  return (
    <button onClick={() => changeLanguage(i18n.language === "en" ? "fa" : "en")}>
      {t("change_language")}
    </button>
  );
}
