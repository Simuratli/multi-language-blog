import { BlockContent } from "@/types/global.types";

export const calculateReadingTime = (text: BlockContent[]) => {
  const extractTextFromBlocks = (blocks: BlockContent[]): string => {
    return blocks
      ?.map((block) => {
        // Handle different block types
        if (block._type === "block" && block.children) {
          return block.children.map((child: any) => child.text).join(" ");
        }
        return "";
      })
      .join(" ");
  };

  const strignContent = extractTextFromBlocks(text);
  const words = strignContent.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(words / 200);
  return readingTime;
};
