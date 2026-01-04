import { defineQuery } from "next-sanity";

const IMAGE = `
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
    "images": gallery[]->{${IMAGE}}
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
    "images": gallery[]->{${IMAGE}}
  }
`);
