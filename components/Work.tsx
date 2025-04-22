import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import { getWorkImageByName } from "@/utils/getWorkImageByName";
import { TbBrandGithub } from "react-icons/tb";
import Link from "next/link";

interface WorkProps {
  title: string;
  description: string;
  githubLink: string;
  link: string;
  picture: string;
  techs: string[];
}

const Work = ({ title, description, link, picture, techs, githubLink }: WorkProps) => {
  return (
    <div className="work">
      <div className="work-container">
        {/* content */}
        <div className="work-content">
          <p className="work-title">{title}</p>
          <p className="work-discription">{description}</p>
          <div className="work-techs">
            {techs.map((data, index) => (
              <span key={index} className="tags-tech">
                {data}
              </span>
            ))}
          </div>
          <div className="works-link-end">
            <div className="work-links-flex">
              <Link
                href={githubLink}
                target="_blank"
                className="actions-work"
              >
                <TbBrandGithub />
              </Link>
              <Link href={link} className="actions-work" target="_blank">
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
              src={getWorkImageByName(picture)}
              alt="arya website image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
