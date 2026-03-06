import { PortableText } from "@portabletext/react";
import { TypographyComponents } from "@/components/common/portable-text.components";
import { Link } from "@/i18n/routing";
import type { AppHomeProject } from "@/modules/home/home.adapter";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectCard({
  project,
  index,
  total,
}: {
  project: AppHomeProject;
  index: number;
  total: number;
}) {
  const link = `/showcase/${project.slug}`;
  const zIndex = index + 1;

  let topClass = "";
  if (index === 0) {
    topClass = "!top-0 lg:!top-0";
  } else if (index === total - 1 && total > 2) {
    topClass = "top-[6.8rem] lg:top-[9.3rem]";
  } else {
    topClass = "top-[6.7rem] lg:top-[9.2rem]";
  }

  return (
    <div
      className={`col-span-full w-full bg-background lg:sticky ${topClass}`}
      style={{ zIndex }}
    >
      <div className="w-full bg-background px-0 py-4 transition-colors duration-500 border-t border-border group hover:border-foreground/30 flex flex-col md:flex-row justify-between gap-6 min-h-[300px]">
        <div className="relative w-full md:w-xl after:pointer-events-none after:absolute after:inset-0 after:border after:border-border/20 lg:col-span-7 bg-background">
          <ProjectMedia project={project} link={link} />
        </div>

        <div className="w-full md:w-xl flex flex-col justify-between bg-background relative z-10">
          <Link
            href={link}
            className="text-foreground md:hidden lg:text-2xl mb-4 font-light text-3xl"
          >
            <span className="actionable">{project.title}</span>
          </Link>
          <div className="text-muted-foreground bg-background transition-colors duration-500 group-hover:text-foreground/80">
            <PortableText
              value={project.description}
              components={TypographyComponents}
            />
          </div>
          <div className="flex-wrap gap-2 hidden lg:flex bg-background mt-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[11px] uppercase tracking-wider font-medium text-muted-foreground border border-border/40 rounded-full px-3 py-1 transition-colors duration-500 group-hover:border-foreground/20 group-hover:text-foreground/70">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={link}
          className="hidden h-max w-max justify-self-end text-right md:block lg:col-span-2 lg:col-start-11 bg-background relative z-10"
        >
          <span className="actionable group [&:before]:delay-0 [&:before]:hover:delay-150">
            <span className="translate-x-6 transition-transform duration-200 ease-in-out group-hover:translate-x-0 text-3xl font-light text-foreground">
              {project.title}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
