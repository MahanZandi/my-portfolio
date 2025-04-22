interface Projects {
  id: number;
  title: string;
  description: string;
  link: string;
  githubLink: string;
  picture: string;
  techs: string[];
}

export const projects: Projects[] = [
  {
    id: 1,
    title: "وبسایت فرآوردانه آریا",
    description: "من وبسایت آریا را با تکنولوژی‌های زیر ساخته‌ام",
    link: "https://www.fdarya.com",
    githubLink: "https://github.com/MahanZandi/fdarya.com",
    picture: "arya-image",
    techs: ["React", "Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
  },
  {
    id: 2,
    title: "وبسایت پورتفولیو شخصی",
    description: "من وبسایت آریا را با تکنولوژی‌های زیر ساخته‌ام",
    link: "",
    githubLink: "https://github.com/MahanZandi/my-portfolio",
    picture: "portfolio-image",
    techs: ["React", "Next.js", "TypeScript", "Tailwind", "SCSS", "Git"],
  },
];
