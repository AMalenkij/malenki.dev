import { client } from "@/sanity/client"
import { ProjectInfo } from "./_components/ProjectInfo"
import { MediaGallery } from "./_components/MediaGallery"
import { notFound } from "next/navigation"
import { GET_PROJECT_QUERY } from "@/modules/showcase/showcase.repository";
import { showcaseDetailAdapter } from "@/modules/showcase/showcase-detail.adapter";
import { BackButton } from "@/components/ui/BackButton";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const rawData = await client.fetch(GET_PROJECT_QUERY, { slug });
  const project = showcaseDetailAdapter(rawData)

  if (!project) notFound()

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="flex flex-col lg:flex-row gap-10 items-start relative">
        <aside className="w-full lg:w-1/4 lg:sticky lg:top-10 h-fit">
          <BackButton label="Back"/>
          <ProjectInfo
            title={project.title}
            year={project.year}
            tags={project.tags}
            description={project.description}
            logo={project.logo}
          />
        </aside>

        <main className="w-full">
          <MediaGallery gallery={project.images} />
        </main>
      </div>
    </div>
  )
}
