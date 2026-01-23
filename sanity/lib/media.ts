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
    }),

    defineField({
      name: "file",
      title: "Image or Video",
      type: "file",
      options: {
        accept: "image/*,video/*",
      },
    }),

    defineField({
      name: "type",
      title: "Media Type",
      type: "string",
      options: {
        list: ["image", "video"],
        layout: "radio",
      },
    }),
  ],
});
