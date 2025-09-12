import { useTranslations } from "next-intl";
import { skillsData } from "@/data/skillsData";
import Link from "next/link";
import Image from "next/image";

const Skills: React.FC = () => {
  const t = useTranslations("skills");

  return (
    <div className="skills">
      <div className="skills-container">
        <div>
          {/* titles */}
          <div className="skills-titles">
            <span className="skills-tag">{t("tag")}</span>
            <span className="skills-title-span">{t("overview")}</span>
          </div>
          {/* content */}

            <div className="skills-content-container">
              {skillsData?.map((item, index) => (
                <div key={index} className="skills-item">
                  <Link href={item.link}>
                    <Image
                      className="skills-item-image"
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                    />
                  </Link>
                  <p className="skills-item-text">{item.title}</p>
                </div>
              ))}
            </div>
        </div>
        <div className="flex justify-center -mt-[250px] md:-mt-[150px]">
          <Image
            width={768}
            height={384}
            className="opacity-15 h-[300px] w-auto"
            alt="code image"
            src="/images/code-image.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
