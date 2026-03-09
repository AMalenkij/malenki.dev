import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TypographyComponents } from "@/components/common/portable-text.components";
import type { AppProject } from "@/modules/showcase/showcase-detail.adapter";

type ProjectInfoProps = Pick<
  AppProject,
  "title" | "year" | "tags" | "description" | "logo"
>;

export function ProjectInfo({
  title,
  year,
  tags,
  description,
  logo,
}: ProjectInfoProps) {
  const t = useTranslations("ProjectInfo");

  return (
    <div className="h-full flex flex-col">
      <div className="space-y-12">
        {/* Project Meta Table */}
        <ul className="flex flex-col divide-y divide-border border-y border-border w-full">
          {/* Row 1: Client */}
          <li className="grid grid-cols-4 items-center gap-2 py-3 text-sm">
            <span className="col-span-1 text-muted-foreground">
              {t("labels.client")}
            </span>
            <span className="col-span-3 flex items-center gap-2 font-medium text-foreground">
              <div className="relative size-5 overflow-hidden rounded-full border border-border">
                <Image
                  src={logo}
                  alt={`${title} ${t("accessibility.logoSuffix")}`}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{title}</span>
            </span>
          </li>

          {/* Row 2: Year */}
          <li className="grid grid-cols-4 items-center gap-2 py-3 text-sm">
            <span className="col-span-1 text-muted-foreground">
              {t("labels.year")}
            </span>
            <span className="col-span-3 font-medium text-foreground">
              {year}
            </span>
          </li>

          {/* Row 3: Tags */}
          <li className="grid grid-cols-4 items-start gap-2 py-3 text-sm">
            <span className="col-span-1 text-muted-foreground">
              {t("labels.tag")}
            </span>
            <div className="col-span-3 flex flex-wrap gap-1 font-medium text-foreground">
              {tags?.map((tag, i) => (
                <span key={tag}>
                  {tag}
                  {i < tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </li>
        </ul>

        {/* Project Description */}
        <section className="space-y-6 text-pretty leading-relaxed text-base md:text-md">
          <PortableText value={description} components={TypographyComponents} />
        </section>
      </div>
    </div>
  );
}
