import { projects } from "@/data/projectsData";
import Work from "./Work";

const Works: React.FC = () => {
  return (
    <div id="works" className="works">
      <div>
        <span className="works-tags-container">
          <p className="tags">نمونه کارهام</p>
        </span>
        <span className="works-discription">
          <p>در این بخش میتوانید نمونه کارهایم را مشاهده کنید :</p>
        </span>
      </div>
      {projects.map((data) => (
        <Work
          key={data.id}
          title={data.title}
          description={data.description}
          link={data.link}
          picture={data.picture}
          techs={data.techs}
          githubLink={data.githubLink}
        />
      ))}
    </div>
  );
};

export default Works;
