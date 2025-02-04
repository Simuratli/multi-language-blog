import { QuoteResponseType } from "@/types/global.types";
import React from "react";
import { PortableText } from "@portabletext/react";

const Quote = ({
  quote,
  locale,
}: {
  quote: QuoteResponseType;
  locale: "az" | "en";
}) => {
  return (
    <div
      id="quote"
      className="text-[var(--text-gray)] text-[32px] leading-[32px] md:text-[56px] md:leading-[64px] !font-serif"
    >
      {<PortableText value={quote.body[locale]} />}
    </div>
  );
};

export default Quote;
