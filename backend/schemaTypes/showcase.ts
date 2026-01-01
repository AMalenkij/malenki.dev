import { defineField } from "sanity";
import type { MediaItem } from "../sanity.types";

type ShowcaseSelection = {
	title: string;
	year: number;
	media?: MediaItem;
};

export const showcase = {
	name: "showcase",
	title: "Showcase",
	type: "document",
	fields: [
		// 1. TITLE
		defineField({
			name: "title",
			title: "Project Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		// 2. SLUG
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			description: "Generated from the title, used for the URL",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),

		// 3. LOGO (REFERENCE)
		defineField({
			name: "logo",
			title: "Client Logo",
			description: "Select an SVG logo from the Media Item library",
			type: "reference",
			to: [{ type: "mediaItem" }],
			options: {
				filter: "mediaType == $mediaType",
				filterParams: { mediaType: "svg" },
				disableNew: false,
			},
			validation: (Rule) => Rule.required(),
		}),

		// 4. DATE (YEAR)
		defineField({
			name: "year",
			title: "Implementation Year",
			type: "number",
			validation: (Rule) => Rule.required().min(2000).max(2100).integer(),
			initialValue: new Date().getFullYear(),
		}),

		// 5. TAGS (Reference)
		defineField({
			name: "tags",
			title: "Tags",
			description: "Project categories or technologies used",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "tag" }],
				},
			],
			validation: (Rule) => Rule.required(),
		}),

		// 6. DESCRIPTION (Portable Text)
		defineField({
			name: "description",
			title: "Description",
			description: "Detailed project overview",
			type: "array",
			of: [{ type: "block" }],
		}),

		// 7. MEDIA (GALLERY)
		defineField({
			name: "gallery",
			title: "Media Gallery",
			description: "Select photos, videos, or SVGs from the Media Item library",
			type: "array",
			options: {
				layout: "grid",
			},
			of: [
				{
					type: "reference",
					to: [{ type: "mediaItem" }],
				},
			],
			validation: (Rule) => Rule.unique(),
		}),
	],

	preview: {
		select: {
			title: "title",
			year: "year",
			media: "logo.svgFile",
		},
		prepare(selection: ShowcaseSelection) {
			const { title, year, media } = selection;
			return {
				title: title,
				subtitle: year ? `Released: ${year}` : "No year set",
				media: media,
			};
		},
	},
};
