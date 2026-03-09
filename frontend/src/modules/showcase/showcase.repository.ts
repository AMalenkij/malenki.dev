import { defineQuery } from "next-sanity";

const MEDIA = `
  "id": _id,
  "mediaType": mediaType,
  "url": coalesce(imageFile.asset->url, svgFile.asset->url, videoFile.asset->url),
  "lqip": imageFile.asset->metadata.lqip,
  "dimensions": coalesce(imageFile.asset->metadata.dimensions, videoFile.asset->metadata.dimensions),
  "alt": coalesce(alt, title, "Project Media")
`;

export const GET_PROJECTS_QUERY = defineQuery(`
  *[_type == "showcase"] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    year,
    "logo": coalesce(logo->svgFile.asset->url),
    "tags": tags[]->name,
    "media": gallery[]->{${MEDIA}}
  }
`);

export const GET_PROJECT_QUERY = defineQuery(`
  *[_type == "showcase" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "slug": slug.current,
    year,
    "logo": coalesce(logo->svgFile.asset->url),
    "tags": tags[]->name,
    "media": gallery[]->{${MEDIA}}
  }
`);
