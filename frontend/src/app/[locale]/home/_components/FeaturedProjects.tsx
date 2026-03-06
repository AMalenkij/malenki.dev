import { getTranslations } from "next-intl/server";
import { homeAdapter } from "@/modules/home/home.adapter";
import { GET_HOME_PROJECTS_QUERY } from "@/modules/home/home.repository";
import { client } from "@/sanity/client";
import { ProjectCard } from "./ProjectCard";

export async function FeaturedProjects() {
  const t = await getTranslations("Home.FeaturedProjects");
  const rawData = await client.fetch(GET_HOME_PROJECTS_QUERY, { limit: 4 });
  const projects = homeAdapter(rawData);

  return (
    <div className="relative bg-background">
      <h2
        className="sticky top-0 col-span-full bg-background pb-6 pt-12 text-5xl font-light text-muted-foreground lg:pt-14"
        style={{ zIndex: 10 }}
      >
        {t("title")}
      </h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
        />
      ))}
    </div>
  );
}
