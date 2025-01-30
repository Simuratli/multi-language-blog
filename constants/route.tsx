import { CategoriesType } from "@/types/global.types";
import {
  Album,
  BookCopy,
  BookText,
  Monitor,
  MonitorStop,
  StickyNote,
} from "lucide-react";

export const createNavRouting = (
  locale: "az" | "en",
  categories: CategoriesType[],
) => {
  const childCategories = categories?.map((category) => ({
    title: category.title[locale],
    url: `/${locale}/categories/${category.slug.current}`,
  }));

  return [
    {
      title: "Categories",
      icon: BookCopy,
      url: `/${locale}/categories`,
      children: childCategories,
    },
    {
      title: "Blog",
      url: `/${locale}/blog`,
      icon: StickyNote,
    },
    {
      title: "About",
      url: `/${locale}/about`,
      icon: BookText,
    },
  ];
};
