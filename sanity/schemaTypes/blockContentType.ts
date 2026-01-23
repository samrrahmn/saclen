import { defineType, defineArrayMember } from "sanity";
import { ImageIcon, PlayIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    // ===== TEXT BLOCK =====
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Inline Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),

    // ===== IMAGE BLOCK =====
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    // ===== External Video =====
    defineArrayMember({
      type: "object",
      name: "videoEmbed",
      title: "External Video",
      icon: PlayIcon,
      fields: [
        {
          name: "url",
          type: "url",
          title: "Video URL",
        },
      ],
    }),

    // ===== UPLOADED VIDEO =====
    defineArrayMember({
      type: "file",
      name: "videoFile",
      title: "Upload Video",
      options: {
        accept: "video/*",
      },
    }),

    // ===== TABLE =====
    defineArrayMember({
      type: "blogTable",
      title: "Table",
    }),
  ],
});
