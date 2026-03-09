import type { PortableTextBlock } from "@portabletext/types";
import { type AppMedia, mediaAdapter, type RawMedia } from "@/modules/common/media.adapter";
import type { GET_PROJECT_QUERY_RESULT } from "@/sanity.types";

export type AppProject = {
  id: string;
  title: string;
  slug: string;
  year: number;
  logo: string;
  description: PortableTextBlock[];
  tags: string[];
  media: AppMedia[];
};

export function showcaseDetailAdapter(
  rawProject: GET_PROJECT_QUERY_RESULT,
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
    !rawProject.media
  ) {
    return null;
  }

  const processedMedia = mediaAdapter(rawProject.media as RawMedia[]);

  return {
    id: rawProject._id,
    title: rawProject.title,
    slug: rawProject.slug,
    year: rawProject.year,
    logo: rawProject.logo,
    description: rawProject.description as PortableTextBlock[],
    tags: (rawProject.tags || []).filter((tag): tag is string => Boolean(tag)),
    media: processedMedia,
  };
}
