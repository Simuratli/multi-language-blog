import Card from "@/components/card/card";
import { Skeleton } from "@/components/ui/skeleton";
import client from "@/sanity";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { PostType } from "@/types/global.types";
import groq from "groq";
// import { CARD_SIZE_ENUM } from "@/types/enums";
import React from "react";

const CategoryId = async ({
  params,
}: {
  params: Promise<{ locale: "az" | "en"; categoryId: string }>;
}) => {
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
