import type { GET_HOME_PROJECTS_QUERY_RESULT } from "@/sanity.types";

type RawItem = GET_HOME_PROJECTS_QUERY_RESULT[number];
export type RawVideo = NonNullable<RawItem["coverVideo"]>[number];

export type AppVideo = {
    id: string;
    url: string;
};

export function videoAdapter(sanityVideos: RawVideo[]): AppVideo[] {
    return sanityVideos.reduce<AppVideo[]>((acc, item) => {
        if (!item || !item.id || !item.url) {
            return acc;
        }

        acc.push({
            id: item.id,
            url: item.url,
        });

        return acc;
    }, []);
}
