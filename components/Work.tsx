import Image, { StaticImageData } from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import { getWorkImageByName } from "@/utils/getWorkImageByName";
import { TbBrandGithub } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface WorkProps {
  data: {
    title: string;
    description: string;
    githubLink: string;
    link: string;
    picture: StaticImageData | string;
    techs: string[];
    feature: string[];
  };
}

const Work = ({ data }: WorkProps) => {
  const t = useTranslations("progects");

  const getLang = useTranslations();

  const dynamicDir = getLang("lang") === "fa" ? "rtl" : "ltr";

  const checkGithubLink = data.githubLink;

  return (
    <div className="work">
      <div className="work-container">
        {/* content */}
        <div dir={dynamicDir} className="work-content">
          <h2 className="work-title">{t(data.title)}</h2>
          <p className="work-discription">{t(data.description)}</p>
          <ul>
            <p className="work-features-title">{t("feature-title")}</p>
            {data.feature.map((data, index) => (
              <li className="work-features-space" key={index}>
                <GoDotFill className="work-icon" size={16}/>
                <p>{t(data)}</p>
              </li>
            ))}
          </ul>
          <div>
            <p className="work-techs-title">{t("works-techs-title")}</p>
          </div>
          <div className="work-techs">
            {data.techs.map((data, index) => (
              <span key={index} className="tags-tech">
                {data}
              </span>
            ))}
          </div>
          <div className="works-link-end">
            <div className="work-links-flex">
              <Link
                href={data.githubLink || "/"}
                target="_blank"
                className={`actions-work ${checkGithubLink ? null : "hidden"}`}
              >
                <TbBrandGithub />
              </Link>
              <Link href={data.link} className="actions-work" target="_blank">
                <RiExternalLinkLine size={24} />
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="work-image-outline">
          <div className="work-image-space">
            <Image
              className="work-image"
              src={getWorkImageByName(data.picture)}
              alt="arya website image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
