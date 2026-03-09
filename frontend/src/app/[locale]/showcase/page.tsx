import { PageHeading } from "@/components/ui/PageHeading";
import { projectsAdapter } from "@/modules/showcase/showcase.adapter";
import { GET_PROJECTS_QUERY } from "@/modules/showcase/showcase.repository";
import { client } from "@/sanity/client";
import { ShowcaseContainer } from "./_components/ShowcaseContainer";

export default async function PageShowcase() {
  const rawData = await client.fetch(GET_PROJECTS_QUERY);
  const projects = projectsAdapter(rawData);
  return (
    <div className="container mx-auto py-10">
      <PageHeading
        title="Showcase"
        sectionName="Showcase"
        counter={projects.length}
      />
      <div className="w-full">
        <ShowcaseContainer projects={projects} />
      </div>
    </div>
  );
}
