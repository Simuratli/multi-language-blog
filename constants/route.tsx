import {
  Album,
  BookCopy,
  BookText,
  Home,
  Monitor,
  MonitorStop,
  StickyNote,
} from "lucide-react";

export const createNavRouting = (locale: string) => [
  {
    title: "Categories",
    icon: BookCopy,
    url: `/${locale}/categories`,
    children: [
      {
        title: "Novel",
        url: `/${locale}/categories/novel`,
        icon: Album,
      },
      {
        title: "Frontend",
        url: `/${locale}/categories/frontend`,
        icon: Monitor,
      },
      {
        title: "Backend",
        url: `/${locale}/categories/backend`,
        icon: MonitorStop,
      },
    ],
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
