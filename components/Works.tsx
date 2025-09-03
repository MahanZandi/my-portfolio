import { projects, ProjectsType } from "@/data/projectsData";
import Work from "./Work";
import { useTranslations } from "next-intl";

const Works: React.FC = () => {
  const t = useTranslations("works");

  return (
    <div id="works" className="works">
      <div className="works-container">
        <span className="works-tags-container">
          <p className="tags">{t("tag")}</p>
        </span>
        <span className="works-discription">
          <p>{t("description")}</p>
        </span>
      </div>
      <div className="flex xl:flex-row flex-col container gap-6 desktop:gap-12">
        {projects.map((data: ProjectsType) => (
          <Work key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Works;
