import type { PortableTextBlock } from "next-sanity";
import {
  type AppImage,
  imageAdapter,
  type RawImage,
} from "@/modules/common/image.adapter";
import {
  type AppVideo,
  type RawVideo,
  videoAdapter,
} from "@/modules/common/video.adapter";
import type { GET_HOME_PROJECTS_QUERY_RESULT } from "@/sanity.types";

export type AppHomeProject = {
  id: string;
  title: string;
  slug: string;
  description: PortableTextBlock[];
  tags: string[];
  coverImage: AppImage | null;
  coverVideo: AppVideo | null;
};

export function homeAdapter(
  rawProjects: GET_HOME_PROJECTS_QUERY_RESULT,
): AppHomeProject[] {
  return rawProjects.reduce<AppHomeProject[]>((acc, item) => {
    if (
      !item ||
      !item._id ||
      !item.title ||
      !item.slug ||
      !item.description
    ) {
      return acc;
    }

    const rawCoverImage = Array.isArray(item.coverImage)
      ? item.coverImage[0]
      : item.coverImage;
    const processedImage: AppImage | null = rawCoverImage
      ? imageAdapter([rawCoverImage as unknown as RawImage])[0] || null
      : null;

    const rawCoverVideo = Array.isArray(item.coverVideo)
      ? item.coverVideo[0]
      : item.coverVideo;
    const processedVideo: AppVideo | null = rawCoverVideo
      ? videoAdapter([rawCoverVideo as unknown as RawVideo])[0] || null
      : null;

    const project: AppHomeProject = {
      id: item._id,
      title: item.title,
      slug: item.slug,
      description: item.description as PortableTextBlock[],
      tags: item.tags || [],
      coverImage: processedImage,
      coverVideo: processedVideo,
    };

    acc.push(project);
    return acc;
  }, []);
}
