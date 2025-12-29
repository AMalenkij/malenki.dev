import { defineField, defineType } from "sanity";

export const media = defineType({
	name: "mediaItem",
	title: "Media Item",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "mediaType",
			title: "Media Type",
			type: "string",
			options: {
				list: [
					{ title: "Photo", value: "photo" },
					{ title: "Video", value: "video" },
				],
				layout: "radio",
			},
			initialValue: "photo",
		}),

		defineField({
			name: "imageFile",
			title: "Image",
			type: "image",
			options: { hotspot: true, accept: "image/*" },
			hidden: ({ parent }) => parent?.mediaType !== "photo",
		}),

		defineField({
			name: "videoFile",
			title: "Video File",
			type: "file",
			options: { accept: "video/*" },
			hidden: ({ parent }) => parent?.mediaType !== "video",
		}),
	],

	preview: {
		select: {
			title: "title",
			mediaType: "mediaType",
			image: "imageFile",
		},
		prepare(selection) {
			const { title, mediaType, image } = selection;
			return {
				title: title || "Untitled",
				subtitle: mediaType === "video" ? "Video" : "Photo",
				media: mediaType === "photo" ? image : undefined,
			};
		},
	},
});
