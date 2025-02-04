import Quote from "@/components/quote/quote";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import groq from "groq";
import client, { urlFor } from "@/sanity";
import { QuoteResponseType } from "@/types/global.types";
import { headers } from "next/headers";

const quoteQuery = groq`
  *[_type == "quote"][0]
`;

const QuoteGeneral = async () => {
  const quote: QuoteResponseType = await client.fetch(quoteQuery);
  const headersList = headers();
  const locale =
    ((await headersList).get("x-next-intl-locale") as "en" | "az") || "en"; // Default to 'en' if not found
  if (!quote) {
    return <QuoteGeneral.Skeleton />;
  }

  return (
    <div className="flex items-end flex-col gap-5 sm:flex-row space-x-4">
      <Quote locale={locale} quote={quote} />
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={urlFor(quote.image).url()} />
          <AvatarFallback>
            {quote.author.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p className="text-[var(--yellow)] font-bold">{quote.author}</p>
      </div>
    </div>
  );
};

export default QuoteGeneral;

QuoteGeneral.Skeleton = function QuoteSkeleton() {
  return (
    <div className="flex items-end flex-col gap-5 sm:flex-row space-x-4">
      <Skeleton className="h-[200px] w-[100%] rounded" />
      <div className="flex items-center gap-2">
        <Skeleton className="rounded-full h-[40px] w-[40px]" />
        <Skeleton className="rounded h-[20px] w-[100px]" />
      </div>
    </div>
  );
};
