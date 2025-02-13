"use client"

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: "fa", // زبان پیش‌فرض
    supportedLngs: ["en", "fa"],
    interpolation: { escapeValue: false },
    detection: { order: ["cookie", "localStorage", "navigator"], caches: ["cookie"] },
    backend: { loadPath: "/locales/{{lng}}.json" },
  });

export default i18next;
