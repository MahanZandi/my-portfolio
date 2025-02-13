"use client"
import LanguageSwitcher from "@/components/translate/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const App:React.FC = () => {
  const { t } = useTranslation();

  return (
    <div dir="rtl" className="bg-gray-200 text-gray-600 dark:bg-gray-900 h-[100vh] dark:text-gray-400 transition-all p-10 ">
      <h1>{t('welcome')}</h1>
      <LanguageSwitcher/>
    </div>
  )
}

export default App;