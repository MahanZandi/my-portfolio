import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations()

    return (
        <div className="footer">
            <div className="footer-container">
                {t('footer')}
            </div>
        </div>
    );
}

export default Footer;