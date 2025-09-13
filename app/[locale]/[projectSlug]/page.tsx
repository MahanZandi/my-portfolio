import { projects } from "@/data/projectsData";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: ProjectDetailProps) {
  const { projectSlug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "progects" });

  const project = projects.find((p) => p.slug === projectSlug);

  if (!project) {
    return {
      title: "پروژه یافت نشد | ماهان زندی",
      description: "پروژه مورد نظر یافت نشد.",
    };
  }

  return {
    title: `${t(project.title)} | ماهان زندی`,
    description: t(project.description),
    keywords: project.feature?.join(", ") || "ماهان زندی, پروژه وب, React, Next.js",
    openGraph: {
      title: `${t(project.title)} | ماهان زندی`,
      description: t(project.description),
      type: "website",
      locale: "fa_IR",
      manifest: "/manifest.json",
      url: `https://www.mahanzandi.ir/projects/${project.slug}`,
      images: [
        {
          url: project.picture,
          width: 1200,
          height: 630,
          alt: t(project.title),
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t(project.title)} | ماهان زندی`,
      description: t(project.description),
      images: [
        {
          url: project.picture,
          width: 1200,
          height: 630,
          alt: t(project.title),
          type: "image/png",
        },
      ],
      site: "https://www.mahanzandi.ir",
    },
  };
}

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { RiExternalLinkLine } from "react-icons/ri";
import Image from "next/image";

type ProjectDetailProps = {
  params: { projectSlug: string; locale: string };
};


const ProjectDetail = async ({ params }: ProjectDetailProps) => {
  const { projectSlug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "progects" });

  const project = projects.find((p) => p.slug === projectSlug);

  const dynamicDir = locale === "fa" ? "rtl" : "ltr";

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 transition-all">
      <div className="container md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px] px-[18px] md:w-[700px] lg:w-[800px] xl:w-[1000px]">
        <h1 className="text-h1">{t(project.title)}</h1>
        <div dir={dynamicDir} className="flex flex-col mt-8 gap-4">
          <p className="text-body-2 leading-[144%] md:leading-[155$]">
            {t(project.description)}
          </p>
          <ul className="flex-col gap-3 flex">
            {project.feature.map((feature, index) => (
              <li className="work-features-space" key={index}>
                <GoDotFill className="work-icon flex-shrink-0" size={16} />
                <p>{t(feature)}</p>
              </li>
            ))}
          </ul>
          <div>
            <div className="mt-8 xl:mt-12">
              <p className="work-techs-title">{t("works-techs-title")}</p>
            </div>
            <div className="flex justify-between flex-wrap">
              <ul className="work-techs">
                {project.techs.map((tech, index) => (
                  <li key={index} className="tags-tech">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex items-center">
                <Link href={project.link}>
                  <button className="relative flex items-center gap-2 justify-center h-[36px] px-4 dark:bg-gray-800 dark:text-gray-300 text-gray-600 rounded-lg outline-none overflow-hidden transition-all duration-300 ease-in-out before:content-[''] before:absolute before:w-[100px] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:top-0 before:-left-[100px] before:opacity-60 hover:before:animate-shine">
                    <span>{t("project-link")}</span>
                    <RiExternalLinkLine size={24} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-full rounded-xl mt-8"
          src={project.picture}
          alt={t(project.title)}
          width={900}
          height={400}
        />
      </div>
      <Link
        href="/#works"
        className="fixed rounded-full left-4 bg-gray-300 dark:bg-gray-700 p-2 top-[90%] xl:top-1/3 flex items-center justify-center group"
      >
        <FaArrowLeft className="dark:text-gray-200 text-black-600" size={24} />
        <div className="absolute left-11 top-6 opacity-0 group-hover:opacity-90 transition-all group-hover:slide-in-fwd-center">
          <span>{t("back")}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectDetail;