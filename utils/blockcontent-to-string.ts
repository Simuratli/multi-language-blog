import { BlockContent } from "@/types/global.types";

export const blogContentToString = (text: BlockContent[]) => {
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

  const strignContent: string = extractTextFromBlocks(text);
  return strignContent;
};
