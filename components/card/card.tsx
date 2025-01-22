import { cn } from "@/lib/utils";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  size: CARD_SIZE_ENUM;
  image: string;
  title: string;
  id: string;
  date: string;
}

const Card = async ({ size, date, id, image, title }: CardProps) => {
  const locale = await getLocale();

  return (
    <Link
      href={`/${locale}/blog/${id}`}
      className="flex flex-col gap-1  rounded"
    >
      <div
        className={cn(
          `relative w-full `,
          size === CARD_SIZE_ENUM.LARGE
            ? "h-[200px] md:h-[480px] lg:h-[560px]"
            : size === CARD_SIZE_ENUM.MEDIUM
              ? "h-[200] md:h-[480px]"
              : "h-[200px] md:h-[480px] lg:h-[200px]",
        )}
      >
        <Image
          src={image}
          alt="IMAGE"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col mt-4 gap-4">
        <h1
          className={`font-semibold font-serif leading-snug text-[24px]  w-[100%] ${size === CARD_SIZE_ENUM.LARGE ? "line-clamp-1" : "line-clamp-2"}  ${size === CARD_SIZE_ENUM.LARGE ? "lg:text-[40px]" : size === CARD_SIZE_ENUM.MEDIUM ? "md:text-base" : "text-base"}`}
        >
          {title}
        </h1>
        <p
          className={`text-[18px] ${size === CARD_SIZE_ENUM.LARGE && "md:text-[24px]"}   text-[var(--yellow)]`}
        >
          {date}
        </p>
      </div>
    </Link>
  );
};

export default Card;
