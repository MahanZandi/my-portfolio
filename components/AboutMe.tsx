import MahanImage from "@/public/images/mahanImage2.jpg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const AboutMe: React.FC = () => {
  const t = useTranslations("about me");

  const getLang = useTranslations();

  const dynamicDir = getLang("lang") === "fa" ? "rtl" : "ltr";

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-tag-container">
          <p className="about-tag">{t("tag")}</p>
        </div>
        <div className="about-space">
          {/* Image */}
          <div className="about-image-flex">
            <div className="about-image-position">
              <Image
                src={MahanImage}
                alt="Mahan Image"
                className="about-image"
              ></Image>
              <div className="about-shape"></div>
            </div>
          </div>
          {/* content */}
          <div className="xl:w-[584px]">
            <span dir={dynamicDir}>
              <h3 className="about-title">{t("title")}</h3>

              <div className="flex flex-col gap-6 leading-[155%]">
                <h2 className="about-cahtion">{t("description-1")}</h2>
                <p className="about-caption">{t("description-2")}</p>
                <p className="about-caption">{t("description-3")}</p>
                <p className="about-caption">{t("description-4")}</p>
                <p className="about-caption">{t("description-5")} 🥊</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
