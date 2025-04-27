interface Projects {
  id: number;
  title: string;
  description: string;
  link: string;
  githubLink: string;
  picture: string;
  techs: string[];
  feature?: string[]
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "works-arya-title",
    description: "works-arya-description",
    link: "https://www.fdarya.com",
    githubLink: "https://github.com/MahanZandi/fdarya.com",
    picture: "arya-image",
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
      "works-portfolio-feature8",

    ],
    githubLink: "https://github.com/MahanZandi/my-portfolio",
    picture: "portfolio-image",
    techs: ["Next.js", "TypeScript", "Tailwind", "Three js" , "SCSS", "Git"],
  },
];
