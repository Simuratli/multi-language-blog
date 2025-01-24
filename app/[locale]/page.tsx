import Quote from "@/containers/quote/quote";
import Popular from "@/containers/popular/popular";
import Heading from "@/components/heading/heading";
import Latest from "@/containers/latest/latest";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="my-[32px] md:my-[72px]">
      <Suspense fallback={<Quote.Skeleton />}>
        <Quote />
      </Suspense>
      <Suspense fallback={<Popular.Skeleton />}>
        <Popular />
      </Suspense>
      <Suspense fallback={<Heading.Skeleton />}>
        <Heading> Latest Post</Heading>
      </Suspense>
      <Suspense fallback={<Latest.Skeleton />}>
        <Latest />
      </Suspense>
    </div>
  );
}
