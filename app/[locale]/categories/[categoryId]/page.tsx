import Card from "@/components/card/card";
import { Skeleton } from "@/components/ui/skeleton";
import client from "@/sanity";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { PostType } from "@/types/global.types";
import groq from "groq";
import { Metadata } from "next";
// import { CARD_SIZE_ENUM } from "@/types/enums";
import React from "react";

interface CategoryIdPageProps {
  params: Promise<{ locale: "az" | "en"; categoryId: string }>;
}

export async function generateMetadata({
  params,
}: CategoryIdPageProps): Promise<Metadata> {
  const { categoryId, locale } = await params;

  const categoriesQuery = groq`
  *[_type == "category" && slug.current == $categoryId] {
    _id,
    title,
    slug
  }[0]
`;

  const categories = await client.fetch(categoriesQuery, { categoryId });
  const title = categories ? categories.title[locale] : "Unkai Tech Blog";
  const description =
    "Unkai Tech Blog is a multilingual platform (Azerbaijani and English) dedicated to front-end development, offering insights, tutorials, and updates for developers.";
  const image = "/images/bg.png";

  return {
    title: title,
    description: description,
    openGraph: {
      images: [image],
    },
  };
}

const CategoryId = async ({ params }: CategoryIdPageProps) => {
  const { categoryId } = await params;
  const postsQuery = groq`*[_type == "post" && $categoryId in categories[]->.slug.current]{
    ...,
    author->{...}
    }`;

  const posts: PostType[] = await client.fetch(postsQuery, { categoryId });

  if (!posts || posts.length === 0) {
    return (
      <div className="grid content-center mt-20">
        <p className="text-[32px] font-bold text-center">
          No posts found in this category.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
        {posts.map((post) => (
          <Card key={post._id} size={CARD_SIZE_ENUM.MEDIUM} post={post} />
        ))}
      </div>
    </>
  );
};

export default CategoryId;

CategoryId.Skeleton = function CategoryIdSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
    </div>
  );
};
