export interface CategoriesType {
  _id: string;
  title: {
    az: string;
    en: string;
  };
  slug: {
    current: "books";
  };
}

export interface AboutMeType {
  body: { az: any[]; en: any[] };
  name: { az: string; en: string };
  title: string;
  _createdAt: string;
  _id: string;
  _type: string;
  _updatedAt: string;
}

interface MainImage {
  _type: "image";
  asset: {
    _ref: string; // Reference to the image asset
    _type: "reference";
  };
}

interface Slug {
  current: string;
  _type: "slug";
}

interface ImageAsset {
  _ref: string; // Reference to the image asset
  _type: "reference";
}

export interface Image {
  _type: "image";
  asset: ImageAsset;
}

interface Author {
  name: string;
  _id: string;
  _updatedAt: string;
  slug: Slug;
  image: Image;
  _createdAt: string;
  _ref: string;
  _type: "author";
}

interface Span {
  _type: "span";
  marks: string[]; // Marks can be an array of strings (e.g., bold, italic, etc.)
  text: string;
  _key: string;
}

interface Block {
  _type: "block";
  children: Span[]; // List of children (spans) within the block
  style: "normal" | "h1" | "h2" | "h3" | "blockquote"; // You can add other possible styles here
  _key: string;
  markDefs: any[]; // List of mark definitions, can be extended with specific types
}

interface LocaleBlockContent {
  az: Block[]; // Azerbaijani content
  en: Block[]; // English content
}

export interface PostType {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  slug: Slug;
  title: string;
  mainImage: MainImage;
  name: {
    az: string;
    en: string;
  };
  publishedAt: string;
  author: Author;
  body: LocaleBlockContent;
  categories: any;
}
