import Image from "next/image";
import { ProjectsType } from "@/data/projectsData";
import { RiExternalLinkLine } from "react-icons/ri";
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

  return (
    <div
      className={clsx(
        data.firstSuggestion &&
          "sm:col-span-2 sm:row-span-2 sm:col-start-1 sm:row-start-1 lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-1",
        data.secondSuggestion &&
          "sm:col-span-2 sm:row-span-2 sm:row-start-4 lg:col-span-2 lg:row-span-2 lg:row-start-3",
        "relative overflow-hidden rounded-md group cursor-hover"
      )}
    >
      <Link className="block overflow-hidden rounded-t-md" href={data.slug}>
        <Image
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          width={900}
          height={600}
          alt={data.title}
          src={data.picture}
          priority={data.firstSuggestion || data.secondSuggestion}
        />
      </Link>

      <div
        dir={dynamicDir}
        className="py-4 bg-gray-100 dark:bg-gray-900 h-full rounded-b-md px-4 flex flex-col gap-4"
      >
        <h3 className="text-subtitle font-semibold">{t(data.title)}</h3>
        <div>
          <p
            className={clsx(
              data.firstSuggestion || data.secondSuggestion
                ? "sm:line-clamp-3 md:line-clamp-4 line-clamp-1"
                : "line-clamp-1",
              "text-description"
            )}
          >
            {t(data.description)}
          </p>
        </div>
        {(data.firstSuggestion || data.secondSuggestion) && (
          <div className="sm:flex hidden flex-col gap-4">
            <p className="text-body1 text-gray-900 dark:text-gray-100">
              {t("works-techs-title")}
            </p>
            <div className="flex gap-2 flex-warp">
              {data.techs.map((data, index) => (
                <span key={index} className="tags-tech">
                  {data}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between items-end">
          <div className="dark:text-gray-400 text-gray-500">{t(data.date)}</div>
          <Link href={data.slug}>
            <button className="work-shine-button">
              <span>{t("progect-detail-link")}</span>
              <RiExternalLinkLine size={24} />
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Work;
