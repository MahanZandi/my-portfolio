import AryaImage from "@/public/images/aryawebsite.png";
import Work from "./Work";

const Works: React.FC = () => {
  interface Projects {
    id: number;
    title: string;
    description: string;
    link: string;
    picture: any;
    techs: string[];
  }

  const projects: Projects[] = [
    {
      id: 1,
      title: "وبسایت فرآوردانه آریا",
      description: "من وبسایت آریا را با تکنولوژی‌های زیر ساخته‌ام",
      link: "",
      picture: AryaImage,
      techs: ["React", "Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
    },
    {
      id: 2,
      title: "وبسایت فرآوردانه آریا",
      description: "من وبسایت آریا را با تکنولوژی‌های زیر ساخته‌ام",
      link: "",
      picture: AryaImage,
      techs: ["React", "Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
    },
    {
      id: 3,
      title: "وبسایت فرآوردانه آریا",
      description: "من وبسایت آریا را با تکنولوژی‌های زیر ساخته‌ام",
      link: "",
      picture: AryaImage,
      techs: ["React", "Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
    },
  ];

  return (
    <div className="container xl:py-[96px] bg-white dark:bg-gray-950 transition-all">
      <div>
        <span className="flex justify-center items-center">
          <p className="tags">نمونه کارهام</p>
        </span>
        <span className="flex text-subtitle justify-center items-center pt-[16px] pb-[24px] desktop:pb-[48px]">
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
        />
      ))}
    </div>
  );
};

export default Works;