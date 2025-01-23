import Quote from "@/containers/quote/quote";
import Popular from "@/containers/popular/popular";
import Heading from "@/components/heading/heading";
import Latest from "@/containers/latest/latest";
import Paging from "@/components/paging/paging";

export default function Home() {
  return (
    <div className="my-[32px] md:my-[72px]">
      <Quote />
      <Popular />
      <Heading> Latest Post</Heading>
      <Latest />
      <Paging />
    </div>
  );
}
