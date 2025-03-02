import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";

interface WorkProps {
  title: string;
  description: string;
  link: string;
  picture: string;
  techs: string[];
}

const Work = ({ title, description, link, picture, techs}:WorkProps) => {
  return (
    <div className="work">
      <div className="work-container">
        {/* content */}
        <div className="work-content">
          <p className="work-title">{title}</p>
          <p className="work-discription">{description}</p>
          <div className="work-techs">
            {
              techs.map((data, index) => (
                <span 
                  key={index}
                  className="tags-tech"
                >
                  {data}
                </span>
              ))
            }
          </div>
          <div className="work-link-container">
            <Link
              href={link}
              className="work-link"
            >
              <RiExternalLinkLine size={24} />
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="work-image-outline">
          <div className="work-image-space">
            <Image
              className="work-image"
              src={picture}
              alt="arya website image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
