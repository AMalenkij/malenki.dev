import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const tag = defineType({
	name: "tag",
	title: "Tags",
	type: "document",
	icon: TagIcon,
	description: "Categories and keywords for classification",
	fields: [
		defineField({
			name: "name",
			title: "Tag name",
			description: "A short name for a category or keyword",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
	],
});
