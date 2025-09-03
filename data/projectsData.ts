import { StaticImageData } from "next/image";

export interface ProjectsType {
  id: number;
  title: string;
  description: string;
  link: string;
  githubLink: string | null;
  picture: string | StaticImageData;
  techs: string[];
  feature: string[];
}

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "works-arya-title",
    description: "works-arya-description",
    link: "https://www.fdarya.com",
    githubLink: null,
    picture: "/images/arya-project.png",
    feature: [
      "works-arya-feature1",
      "works-arya-feature2",
      "works-arya-feature3",
      "works-arya-feature4",
      "works-arya-feature5",
    ],
    techs: ["Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
  },
  {
    id: 2,
    title: "works-portfolio-title",
    description: "works-portfolio-description",
    link: "",
    feature: [
      "works-portfolio-feature1",
      "works-portfolio-feature2",
      "works-portfolio-feature3",
      "works-portfolio-feature4",
      "works-portfolio-feature5",
      "works-portfolio-feature6",
      "works-portfolio-feature7",

    ],
    githubLink: "https://github.com/MahanZandi/my-portfolio",
    picture: "/images/portfolio-project.png",
    techs: ["Next.js", "TypeScript", "Tailwind", "Three js" , "SCSS", "Git"],
  },
];
