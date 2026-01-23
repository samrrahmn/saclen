import { defineType, defineField, defineArrayMember } from "sanity";

export const blogTableType = defineType({
  name: "blogTable",
  title: "Table",
  type: "object",

  fields: [
    defineField({
      name: "caption",
      title: "Table Caption",
      type: "string",
    }),

    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        defineArrayMember({
          name: "tableRow",
          title: "Row",
          type: "object",
          fields: [
            defineField({
              name: "isHeader",
              title: "Header Row?",
              type: "boolean",
              initialValue: false,
            }),

            defineField({
              name: "cells",
              title: "Cells (Columns)",
              type: "array",
              of: [
                defineArrayMember({
                  name: "tableCell",
                  title: "Cell",
                  type: "object",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Cell Content",
                      type: "array",
                      of: [
                        {
                          type: "block",
                          styles: [{ title: "Normal", value: "normal" }],
                          lists: [],
                        },
                      ],
                    }),
                  ],
                  preview: {
                    select: {
                      blocks: "text",
                    },
                    prepare(value) {
                      const block = value.blocks?.find(
                        (b: any) => b._type === "block",
                      );
                      return {
                        title: block?.children?.[0]?.text || "Empty cell",
                      };
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              cells: "cells",
            },
            prepare(value) {
              const first =
                value.cells?.[0]?.text?.[0]?.children?.[0]?.text || "Row";
              return { title: first };
            },
          },
        }),
      ],
    }),
  ],
});
