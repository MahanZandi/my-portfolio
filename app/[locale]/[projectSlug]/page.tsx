import { projects } from "@/data/projectsData";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: {
    locale: string;
    projectSlug: string;
  };
}

const ProjectDetail = async ({ params }: ProjectDetailProps) => {
  const { projectSlug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "progects" });

  const project = projects.find((p) => p.slug === projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <div className="page h-screen">
      <div className="container md:pt-[164px] md:pb-[96px] pt-[132px] pb-[64px] px-[18px]">
        <h1>{t(project.title)}</h1>
      </div>
    </div>
  );
};

export default ProjectDetail;
