import { defineType, defineField } from "sanity";

export const mediaType = defineType({
  name: "media",
  title: "Media Library",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "type",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "file",
      title: "File",
      type: "file",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "previewImage",
      title: "Preview Image (for video)",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => document?.type !== "video",
    }),
  ],
});
