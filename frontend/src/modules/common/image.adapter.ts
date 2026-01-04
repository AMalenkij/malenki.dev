import type { GET_PROJECTS_QUERY_RESULT } from "@/sanity.types";

type RawItem = GET_PROJECTS_QUERY_RESULT[number];
export type RawImage = NonNullable<RawItem["images"]>[number];

export type AppImage = {
  image: {
    id: string;
    alt: string;
    url: string;
    lqip: string;
    dimensions: {
      height: number;
      width: number;
    };
  };
};

export function imageAdapter(sanityImages: RawImage[]): AppImage[] {
  return sanityImages.reduce<AppImage[]>((acc, item) => {
    if (
      item.url &&
      item.lqip &&
      item.id &&
      item.alt &&
      item.dimensions?.height &&
      item.dimensions?.width
    ) {
      acc.push({
        image: {
          id: item.id,
          alt: item.alt,
          url: item.url,
          lqip: item.lqip,
          dimensions: {
            height: item.dimensions.height,
            width: item.dimensions.width,
          },
        },
      });
    }
    return acc;
  }, []);
}
