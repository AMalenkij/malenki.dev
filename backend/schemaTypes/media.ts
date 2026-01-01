import { CodeIcon, ImageIcon, PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const media = defineType({
	name: "mediaItem",
	title: "Media Assets",
	type: "document",
	icon: ImageIcon,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			description: "Internal name for the asset",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "mediaType",
			title: "Media Type",
			type: "string",
			options: {
				list: [
					{ title: "Photo (Raster)", value: "photo" },
					{ title: "Video", value: "video" },
					{ title: "SVG (Vector)", value: "svg" },
				],
				layout: "radio",
			},
			initialValue: "photo",
		}),

		// --- PHOTO FIELD ---
		defineField({
			name: "imageFile",
			title: "Image File",
			type: "image",
			options: {
				hotspot: true,
				// metadata: ["lqip", "dimensions"],
			},
			hidden: ({ parent }) => parent?.mediaType !== "photo",
		}),

		// --- VIDEO FIELD ---
		defineField({
			name: "videoFile",
			title: "Video File",
			type: "file",
			options: { accept: "video/*" },
			hidden: ({ parent }) => parent?.mediaType !== "video",
		}),

		// --- SVG FIELD ---
		defineField({
			name: "svgFile",
			title: "SVG File",
			type: "image",
			options: {
				accept: "image/svg+xml",
				hotspot: false,
			},
			hidden: ({ parent }) => parent?.mediaType !== "svg",
		}),

		defineField({
			name: "alt",
			title: "Alt Text",
			type: "string",
			description: "Crucial for accessibility and SEO",
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			title: "title",
			mediaType: "mediaType",
			image: "imageFile",
			svg: "svgFile",
		},
		prepare(selection) {
			const { title, mediaType, image, svg } = selection;

			let mediaPreview = ImageIcon;
			if (mediaType === "video") mediaPreview = PlayIcon;
			if (mediaType === "svg") mediaPreview = svg || CodeIcon;
			if (mediaType === "photo") mediaPreview = image;

			return {
				title: title || "Untitled",
				subtitle: mediaType ? mediaType.toUpperCase() : "MEDIA",
				media: mediaPreview,
			};
		},
	},
});
