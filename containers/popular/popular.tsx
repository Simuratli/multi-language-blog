import Card from "@/components/card/card";
import { Skeleton } from "@/components/ui/skeleton";
import client from "@/sanity";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { PostType } from "@/types/global.types";
import groq from "groq";
import React from "react";

const popularPostsQuery = groq`*[_type == "post"] | order(_createdAt asc)[0..2] {
  ...,
  author-> {
    _id,
    name,
    image ,
    slug {
      current
    },
    _createdAt,
    _updatedAt
  },
  categories[]-> {
    _id,
    title
  }
}`;

const Popular = async () => {
  const popularPosts: PostType[] = await client.fetch(popularPostsQuery);
  return (
    <div className=" mx-auto my-[56px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main featured card */}
        {popularPosts.length > 0 && (
          <Card size={CARD_SIZE_ENUM.LARGE} post={popularPosts[0]} />
        )}

        {/* Secondary cards */}
        <div className="flex flex-col gap-5 lg:w-1/3">
          {popularPosts.slice(1).map((post) => (
            <Card size={CARD_SIZE_ENUM.SMALL} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;

Popular.Skeleton = function PopularSkeleton() {
  return (
    <div className="mx-auto my-[56px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main featured card */}
        <div className="lg:w-2/3 ">
          <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center  gap-5 justify-between">
              <Skeleton className="h-[20px] w-[20px] rounded-full" />
              <Skeleton className="h-[20px] w-[100px] rounded" />
            </div>
            <div className="flex flex-end">
              <Skeleton className="h-[20px] w-[100px] rounded" />
            </div>
          </div>
        </div>

        {/* Secondary cards */}
        <div className="flex flex-col gap-5 lg:w-1/3">
          <Skeleton className="h-[200px] md:h-[480px] lg:h-[200px] w-full rounded" />
          <div className="flex items-center justify-between">
            <div className="flex items-center  gap-5 justify-between">
              <Skeleton className="h-[20px] w-[20px] rounded-full" />
              <Skeleton className="h-[20px] w-[100px] rounded" />
            </div>
            <div className="flex flex-end">
              <Skeleton className="h-[20px] w-[100px] rounded" />
            </div>
          </div>
          <Skeleton className="h-[200px] md:h-[480px] lg:h-[200px] w-full rounded" />
          <div className="flex items-center justify-between">
            <div className="flex items-center  gap-5 justify-between">
              <Skeleton className="h-[20px] w-[20px] rounded-full" />
              <Skeleton className="h-[20px] w-[100px] rounded" />
            </div>
            <div className="flex flex-end">
              <Skeleton className="h-[20px] w-[100px] rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const revalidate = 60; // Revalidate the component data every 60 seconds
