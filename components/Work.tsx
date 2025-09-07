import Image, { StaticImageData } from "next/image";
import {ProjectsType} from "@/data/projectsData";
import { RiExternalLinkLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Link from "next/link";

interface WorkProps {
  data: ProjectsType;
}

const Work = ({ data }: WorkProps) => {
  const t = useTranslations("progects");

  const getLang = useTranslations();

  const dynamicDir = getLang("lang") === "fa" ? "rtl" : "ltr";

  // "col-span-2 row-span-2 col-start-2 row-start-1"

  return (
    <div
      className={clsx(
        data.firstSuggestion &&
          "sm:col-span-2 sm:row-span-2 sm:col-start-1 sm:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1",
        data.secondSuggestion &&
          "sm:col-span-2 sm:row-span-2 sm:row-start-4 lg:col-span-2 lg:row-span-2 lg:row-start-3",
        "rounded-md overflow-hidden"
      )}
    >
      <Image
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        width={900}
        height={600}
        alt={data.title}
        src={data.picture}
      />
    </div>
  );
};

export default Work;
