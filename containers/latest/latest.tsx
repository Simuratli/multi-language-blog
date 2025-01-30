import Card from "@/components/card/card";
import { Skeleton } from "@/components/ui/skeleton";
import client from "@/sanity";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { PostType } from "@/types/global.types";
import groq from "groq";
import React from "react";

const popularPostsQuery = groq`*[_type == "post"][0..3] {
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

const Latest = async () => {
  const latestPost: PostType[] = await client.fetch(popularPostsQuery);
  console.log(latestPost, "latestPost");
  if (!latestPost) {
    return <Latest.Skeleton />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
      {latestPost.map((post) => (
        <Card key={post._id} size={CARD_SIZE_ENUM.MEDIUM} post={post} />
      ))}
    </div>
  );
};

export default Latest;

Latest.Skeleton = function LatestSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
      <Skeleton className="h-[200px] md:h-[480px] w-full rounded" />
    </div>
  );
};
