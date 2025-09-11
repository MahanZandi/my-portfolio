import { useTranslations } from "next-intl";
import Contact from "./Contact";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="page">
      <Contact />
      <div className="footer">
        <div className="footer-container">{t("footer")}</div>
      </div>
    </div>
  );
};

export default Footer;
