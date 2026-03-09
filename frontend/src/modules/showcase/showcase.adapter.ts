import { type AppMedia, mediaAdapter, type RawMedia } from "@/modules/common/media.adapter";
import type { GET_PROJECTS_QUERY_RESULT } from "@/sanity.types";

export type AppProject = {
  id: string;
  title: string;
  slug: string;
  year: number;
  logo: string;
  tags: string[];
  media: AppMedia[];
};

export function projectsAdapter(
  rawProjects: GET_PROJECTS_QUERY_RESULT,
): AppProject[] {
  return rawProjects.reduce<AppProject[]>((acc, item) => {
    if (
      !item ||
      !item._id ||
      !item.title ||
      !item.slug ||
      !item.year ||
      !item.logo ||
      !item.tags ||
      !item.media
    ) {
      return acc;
    }

    const processedMedia = mediaAdapter((item.media as RawMedia[]) || []);
    const project: AppProject = {
      id: item._id,
      title: item.title,
      slug: item.slug,
      year: item.year,
      logo: item.logo,
      tags: (item.tags || []).filter((tag): tag is string => Boolean(tag)),
      media: processedMedia,
    };
    acc.push(project);
    return acc;
  }, []);
}
