import { useTranslations } from "next-intl";
import Contact from "./Contact";
import RetroGrid from "./ui/RetroGrid";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="page relative">
      <RetroGrid />
      <Contact />
      <div className="footer">
        <div className="footer-container">{t("footer")}</div>
      </div>
    </div>
  );
};

export default Footer;
