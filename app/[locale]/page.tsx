import Quote from "@/containers/quote/quote";
import Popular from "@/containers/popular/popular";

export default function Home() {
  return (
    <div className="my-[32px] md:my-[72px]">
      <Quote />
      <Popular />
    </div>
  );
}
