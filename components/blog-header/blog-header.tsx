import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Linkedin, Share } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { PostType } from "@/types/global.types";
import { urlFor } from "@/sanity";
import { calculateReadingTime } from "@/utils/calculate-reading-time";

const BlogHeader = ({
  post,
  locale,
}: {
  post: PostType;
  locale: "az" | "en";
}) => {
  return (
    <div className=" w-full md:w-[80%] mx-auto">
      <div className="mb-[24px] flex items-center gap-5">
        <Avatar className="w-[56px] h-[56px]">
          <AvatarImage src={urlFor(post.author.image).url()} />
          <AvatarFallback>
            {post.author.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h1 className="font-bold text-[18px] text-[var(--yellow)]">
          Eljan Simuratli
        </h1>
        <p className="text-[14px] text-[var(--dark-gray)]">
          {new Date(post._createdAt).toLocaleDateString()}
        </p>
      </div>
      <h1 className="text-[32px] md:text-[40px] font-serif mb-[40px]">
        {post.name[locale]}
      </h1>
      <div className="flex justify-between items-center rounded-2xl p-3 bg-[#F4F4F4]">
        <span className="text-[var(--dark-gray)] text-[14px]">
          {calculateReadingTime(post.body[locale])} Mins Read
        </span>
        <div className="flex gap-3">
          <Share className="cursor-pointer" color="#757575" />
          <Linkedin className="cursor-pointer" color="#757575" />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;

BlogHeader.Skeleton = function BlogHeaderSkeleton() {
  return (
    <div className="w-full md:w-[60%] mx-auto">
      <div className="mb-[24px] flex items-center gap-5">
        <Skeleton className="w-[56px] h-[56px] rounded-full" />
        <Skeleton className="w-[200px] h-[40px] rounded-sm" />
        <Skeleton className="w-[100px] h-[30px] rounded-sm" />
      </div>
      <Skeleton className="w-full h-[60px] rounded-sm" />
      <Skeleton className="w-full mt-5 h-[30px] rounded-sm" />
    </div>
  );
};
