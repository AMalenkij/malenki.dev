import { defineQuery } from "next-sanity";

const IMAGE_PROJECTION = `
  "id": _id,
  "url": coalesce(imageFile.asset->url, svgFile.asset->url),
  "lqip": imageFile.asset->metadata.lqip,
  "dimensions": imageFile.asset->metadata.dimensions,
  "alt": coalesce(alt, title, "Project Image")
`;

export const GET_PROJECTS_QUERY = defineQuery(`
  *[_type == "showcase"] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    year,
    "logo": coalesce(logo->svgFile.asset->url),
    "tags": tags[]->name,
    "images": gallery[]->{
      ${IMAGE_PROJECTION}
    }
  }
`);
