"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Link } from "@/i18n/routing";
import type { AppHomeProject } from "@/modules/home/home.adapter";

interface ProjectMediaProps {
  project: AppHomeProject;
  link: string;
}

export function ProjectMedia({ project, link }: ProjectMediaProps) {
  const t = useTranslations("Home.FeaturedProjects");
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Link
      href={link}
      className="group block focus-visible:ring-offset-0!"
      aria-label={`${t("viewProject")} ${project.title}`}
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }}
    >
      <div className="with-dots relative h-full w-full">
        <div className="relative h-full w-full transition-opacity duration-300 aspect-video bg-background">
          {project.coverImage?.image?.url && (
            <Image
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover relative z-10"
              placeholder="blur"
              blurDataURL={project.coverImage.image.lqip}
              src={project.coverImage.image.url}
            />
          )}
          {project.coverVideo?.url && (
            <video
              ref={videoRef}
              style={{ "--controls": "none" } as React.CSSProperties}
              className="absolute inset-0 z-20 h-full w-full object-cover transition-all duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100"
              playsInline
              muted
              loop
              preload="auto"
              src={project.coverVideo.url}
            >
              <track
                kind="metadata"
                label="cuepoints"
                data-removeondestroy=""
              />
              <track kind="chapters" label="chapters" data-removeondestroy="" />
            </video>
          )}
        </div>
      </div>
    </Link>
  );
}
