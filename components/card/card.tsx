import { cn } from "@/lib/utils";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PostType } from "@/types/global.types";
import { headers } from "next/headers";
import { urlFor } from "@/sanity";

interface CardProps {
  post: PostType;
  size: CARD_SIZE_ENUM;
}

const Card = async ({ post, size }: CardProps) => {
  const headersList = headers();
  const locale =
    ((await headersList).get("x-next-intl-locale") as "en" | "az") || "en"; // Default to 'en' if not found

  if (!post) {
    return null; // Safely return null if no post is passed
  }
  const { slug, name, mainImage, _createdAt, author } = post;

  return (
    <Link
      href={`/${locale}/blog/${slug.current}`}
      className="flex flex-col gap-1 w-full  rounded"
    >
      <div
        className={cn(
          `relative w-full `,
          size === CARD_SIZE_ENUM.LARGE
            ? "h-[200px] md:h-[480px] lg:h-[560px]"
            : size === CARD_SIZE_ENUM.MEDIUM
              ? "h-[200px] md:h-[300px] lg:h-[360px]"
              : "h-[200px] md:h-[480px] lg:h-[200px]",
        )}
      >
        <Image
          src={urlFor(mainImage).url()}
          alt="IMAGE"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col mt-4 gap-4">
        <h1
          className={`font-semibold font-serif leading-snug text-[24px]  w-[100%] ${size === CARD_SIZE_ENUM.LARGE ? "line-clamp-1" : "line-clamp-2"}  ${size === CARD_SIZE_ENUM.LARGE ? "lg:text-[40px]" : size === CARD_SIZE_ENUM.MEDIUM ? "md:text-base" : "text-base"}`}
        >
          {name[locale]}
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              {author?.image?.asset._ref ? (
                <AvatarImage src={urlFor(author.image).url()} />
              ) : (
                <AvatarFallback>ES</AvatarFallback>
              )}
            </Avatar>
            <p
              className={`text-[14px] ${size === CARD_SIZE_ENUM.LARGE && "md:text-[18px]"} font-bold`}
            >
              {author.name}
            </p>
          </div>
          <p
            className={`text-[14px] ${size === CARD_SIZE_ENUM.LARGE && "md:text-[18px]"}   text-[var(--yellow)]`}
          >
            {new Date(_createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
