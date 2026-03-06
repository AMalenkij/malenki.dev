import { defineQuery } from "next-sanity";

const IMAGE_FIELDS = `
  "id": _id,
  "url": imageFile.asset->url,
  "lqip": imageFile.asset->metadata.lqip,
  "dimensions": imageFile.asset->metadata.dimensions,
  "alt": coalesce(alt, title, "Project Image")
`;

const VIDEO_FIELDS = `
  "id": _id,
  "url": videoFile.asset->url
`;

export const GET_HOME_PROJECTS_QUERY = defineQuery(`
  *[_type == "showcase"] | order(year desc) [0...$limit] {
    _id,
    title,
    description,
    "slug": slug.current,
    "tags": tags[]->name,
    "coverImage": gallery[@->mediaType == "photo"][0]-> { ${IMAGE_FIELDS} },
    "coverVideo": gallery[@->mediaType == "video"][0]-> { ${VIDEO_FIELDS} }
  }
`);
