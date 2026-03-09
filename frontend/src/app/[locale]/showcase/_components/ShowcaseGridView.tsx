"use client";

import { Link } from "@/i18n/routing";
import type { AppProject } from "@/modules/showcase/showcase.adapter";
import { ShowcaseGalleryMedia } from "./ShowcaseGalleryMedia";

type ShowcaseGridViewProps = {
  projects: AppProject[];
};

export function ShowcaseGridView({ projects }: ShowcaseGridViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/showcase/${project.slug}`}
          className="group flex flex-col gap-4 border border-transparent hover:bg-muted/20 p-3 -m-3 rounded-xl transition-colors"
        >
          {/* Card Media */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted border border-border">
            {project.media?.[0] ? (
              <ShowcaseGalleryMedia item={project.media[0]} />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                No Media
              </div>
            )}
          </div>

          {/* Card Meta */}
          <div className="flex flex-col gap-1.5 px-1">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-lg font-medium text-foreground tracking-tight">
                {project.title}
              </h3>
              <span className="text-sm text-muted-foreground shrink-0 mt-0.5">
                {project.year}
              </span>
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground border border-border/40 rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground border border-border/40 rounded-full px-2 py-0.5">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
