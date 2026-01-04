import { AppImage, imageAdapter } from "@/modules/common/image.adapter";
import type { GET_PROJECTS_QUERY_RESULT } from "@/sanity.types";

export type AppProject = {
  id: string;
  title: string;
  slug: string;
  year: number;
  logo: string;
  tags: string[];
  images: AppImage[];
};

export function projectsAdapter(
  rawProjects: GET_PROJECTS_QUERY_RESULT
): AppProject[] {

  return rawProjects.reduce<AppProject[]>((acc, item) => {
    const processedImages = imageAdapter(item.images || []);
    const project: AppProject = {
      id: item._id,
      title: item.title,
      slug: item.slug,
      year: item.year,
      logo: item.logo!,
      tags: item.tags,
      images: processedImages,
    };
    acc.push(project);
    return acc;
  }, []);
}
