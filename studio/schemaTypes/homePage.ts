import { defineField, defineType } from "sanity";

export const homepage = defineType({
    name: "homepage",
    title: "Homepage",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required().max(100),
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            validation: (rule) => rule.required().max(200),
        }),
        defineField({
            name: "heroPhoto",
            title: "Hero Photo",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    validation: (rule) => rule.required(),
                },
            ],
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
            media: "heroPhoto",
        },
        prepare(selection) {
            const { title, subtitle } = selection;
            return {
                title: title,
                subtitle: subtitle,
                ...selection,
            };
        },
    },
});
