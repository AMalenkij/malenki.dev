import { AppImage, imageAdapter } from "@/modules/common/image.adapter";
import type { GET_PROJECT_QUERY_RESULT } from "@/sanity.types";
import type { PortableTextBlock } from "@portabletext/types";

export type AppProject = {
  id: string;
  title: string;
  slug: string;
  year: number;
  logo: string;
  description: PortableTextBlock[];
  tags: string[];
  images: AppImage[];
};

export function showcaseDetailAdapter(
  rawProject: GET_PROJECT_QUERY_RESULT
): AppProject | null {

  if (
    !rawProject ||
    !rawProject._id ||
    !rawProject.title ||
    !rawProject.slug ||
    !rawProject.year ||
    !rawProject.logo ||
    !rawProject.description ||
    !rawProject.tags ||
    !rawProject.images
  ) {
    return null;
  }

  const processedImages = imageAdapter(rawProject.images);

  return {
    id: rawProject._id,
    title: rawProject.title,
    slug: rawProject.slug,
    year: rawProject.year,
    logo: rawProject.logo,
    description: rawProject.description as PortableTextBlock[],
    tags: rawProject.tags,
    images: processedImages,
  };
}
