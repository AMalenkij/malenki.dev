"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/routing";
import type { AppProject } from "@/modules/showcase/showcase.adapter";
import { ShowcaseGalleryMedia } from "./ShowcaseGalleryMedia";
import { Badge } from "@/components/ui/badge";

type ShowcaseListViewProps = {
  projects: AppProject[];
};

export function ShowcaseListView({ projects }: ShowcaseListViewProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {projects.map((project) => (
        <AccordionItem
          key={project.id}
          value={project.id}
          className="relative border-b border-border"
        >
          <AccordionTrigger className="w-full cursor-pointer py-4 pr-2 hover:bg-muted/50 hover:no-underline data-[state=open]:bg-muted/30">
            <div className="grid w-full grid-cols-12 items-center gap-x-4 gap-y-2 text-left">
              <div className="col-span-12 flex items-center px-4 gap-3 md:col-span-4">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={24}
                  height={24}
                  className="size-6 rounded-full border border-border object-cover"
                />
                <h3 className="text-base font-medium text-foreground">
                  {project.title}
                </h3>
              </div>

              {/* Tags */}
              <div className="col-span-12 flex flex-wrap gap-2 md:col-span-4 md:col-start-5">
                {project.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Year */}
              <div className="col-span-6 flex items-center gap-1.5 md:col-span-2 md:col-start-9">
                <Calendar className="size-3.5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{project.year}</p>
              </div>

              {/* Eptmpy spase */}
              <div className="col-span-6 md:col-span-2 md:col-start-11"></div>
            </div>
          </AccordionTrigger>

          {/* Main link "View Work" */}
          <div className="absolute right-4 top-2.5 z-10">
            <Link
              href={`/showcase/${project.slug}`}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <span className="hidden sm:inline">View Work</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Accordion Content */}
          {project.media && project.media.length > 0 && (
            <AccordionContent className="px-0 pb-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {project.media.slice(0, 3).map((item) => (
                  <Link
                    key={item.mediaType === "photo" ? item.image.id : item.url}
                    href={`/showcase/${project.slug}`}
                    className="group relative aspect-video block overflow-hidden rounded-lg border border-border bg-muted"
                  >
                    <ShowcaseGalleryMedia item={item} />
                  </Link>
                ))}
              </div>
            </AccordionContent>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
