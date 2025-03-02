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
    <div className="container desktop:px-[64px] desktop:pb-[48px] pb-[24px]">
      <div className="flex justify-center desktop:flex-row flex-col-reverse shadow-md rounded-xl">
        {/* content */}
        <div className="dark:bg-gray-800 bg-white w-full desktop:px-[48px] desktop:pt-[48px] px-[32px] pt-[32px] pb-[32px] desktop:rounded-r-xl desktop:rounded-bl-none rounded-b-xl">
          <p className="text-subtitle">{title}</p>
          <p className="pt-[24px]">{description}</p>
          <div className="grid py-[24px] desktop:grid-cols-4 grid-cols-2 gap-2">
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
          <div className="grid place-items-end">
            <Link
              href={link}
              className="p-1 hover:dark:bg-gray-950 hover:bg-gray-200 rounded-lg transition-all"
            >
              <RiExternalLinkLine size={24} />
            </Link>
          </div>
        </div>
        {/* image */}
        <div className="dark:bg-gray-700 bg-gray-50 w-full desktop:rounded-l-xl desktop:rounded-tr-none rounded-t-xl">
          <div className="p-[32px] desktop:p-[48px] ">
            <Image
              className="rounded-xl bg-contain"
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
