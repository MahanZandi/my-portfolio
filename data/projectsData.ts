import { StaticImageData } from "next/image";

export interface ProjectsType {
  id: number;
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  picture: string | StaticImageData;
  techs: string[];
  feature: string[];
  firstSuggestion?: boolean;
  secondSuggestion?: boolean;
  date: "works-arya-date" | "works-portfolio-date" | "works-nobito-date";
  slug: string;
}

export const projects: ProjectsType[] = [
  {
    id: 1,
    title: "works-arya-title",
    description: "works-arya-description",
    link: "https://www.fdarya.com",
    picture: "/images/arya-project.png",
    feature: [
      "works-arya-feature1",
      "works-arya-feature2",
      "works-arya-feature3",
      "works-arya-feature4",
      "works-arya-feature5",
    ],
    techs: ["Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
    date: "works-arya-date",
    slug: "arya-website",
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
    techs: ["Next.js", "TypeScript", "Tailwind", "Three js", "SCSS", "Git"],
    date: "works-portfolio-date",
    slug: "portfolio-website",
  },
  {
    id: 3,
    title: "works-nobito-title",
    description: "works-nobito-description",
    link: "https://nobito-demo.vercel.app/",
    feature: [
      "works-nobito-feature1",
      "works-nobito-feature2",
      "works-nobito-feature3",
      "works-nobito-feature4",
      "works-nobito-feature5",
      "works-nobito-feature6",
      "works-nobito-feature7",
    ],
    picture: "/images/nobito-project.png",
    techs: ["Next.js", "TypeScript", "Tailwind", "zustand", "Git"],
    firstSuggestion: true,
    date: "works-nobito-date",
    slug: "nobito-website",
  },
  // {
  //   id: 4,
  //   title: "works-nobito-title",
  //   description: "works-nobito-description",
  //   link: "https://nobito-demo.vercel.app/",
  //   feature: [
  //     "works-nobito-feature1",
  //     "works-nobito-feature2",
  //     "works-nobito-feature3",
  //     "works-nobito-feature4",
  //     "works-nobito-feature5",
  //     "works-nobito-feature6",
  //     "works-nobito-feature7",
  //   ],
  //   picture: "/images/nobito-project.png",
  //   techs: ["Next.js", "TypeScript", "Tailwind", "zustand", "Git"],
  //   secondSuggestion: true,
  // },
  // {
  //   id: 5,
  //   title: "works-nobito-title",
  //   description: "works-nobito-description",
  //   link: "https://nobito-demo.vercel.app/",
  //   feature: [
  //     "works-nobito-feature1",
  //     "works-nobito-feature2",
  //     "works-nobito-feature3",
  //     "works-nobito-feature4",
  //     "works-nobito-feature5",
  //     "works-nobito-feature6",
  //     "works-nobito-feature7",
  //   ],
  //   picture: "/images/nobito-project.png",
  //   techs: ["Next.js", "TypeScript", "Tailwind", "zustand", "Git"],
  // },
  // {
  //   id: 6,
  //   title: "works-nobito-title",
  //   description: "works-nobito-description",
  //   link: "https://nobito-demo.vercel.app/",
  //   feature: [
  //     "works-nobito-feature1",
  //     "works-nobito-feature2",
  //     "works-nobito-feature3",
  //     "works-nobito-feature4",
  //     "works-nobito-feature5",
  //     "works-nobito-feature6",
  //     "works-nobito-feature7",
  //   ],
  //   picture: "/images/nobito-project.png",
  //   techs: ["Next.js", "TypeScript", "Tailwind", "zustand", "Git"],
  // },
];
