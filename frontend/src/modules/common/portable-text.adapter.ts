import type { PortableTextBlock } from "next-sanity";

export default function portableTextAdapter(text: string): PortableTextBlock[] {
  return [
    {
      _type: "block",
      _key: crypto.randomUUID(),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: crypto.randomUUID(),
          marks: [],
          text: text,
        },
      ],
    },
  ];
}
