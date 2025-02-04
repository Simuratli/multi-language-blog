// import Card from "@/components/card/card";
import Card from "@/components/card/card";
import Paging from "@/components/paging/paging";
import client from "@/sanity";
import { CARD_SIZE_ENUM } from "@/types/enums";
import { PostType } from "@/types/global.types";
import groq from "groq";
// import { CARD_SIZE_ENUM } from "@/types/enums";
import React from "react";

const BlogPage = async ({
  searchParams,
  params,
}: {
  searchParams: Promise<{ page: number }>;
  params: Promise<{ locale: "az" | "en" }>;
}) => {
  const currentPage = (await searchParams).page;
  const queryPage = currentPage - 1;
  const locale = (await params).locale;
  const postsQuery = groq`*[_type == "post"][${Number(queryPage) * 4}..${Number(queryPage) * 4 + 3}]{
  ...,
  author->{...}
  }`;
  const TOTAL_POSTS_QUERY = `count(*[_type == "post"])`;
  const posts: PostType[] = await client.fetch(postsQuery);
  const totalCount: number = await client.fetch(TOTAL_POSTS_QUERY);
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
        {posts.map((post) => (
          <Card key={post._id} size={CARD_SIZE_ENUM.MEDIUM} post={post} />
        ))}
      </div>
      <Paging
        total={totalCount}
        current={Number(currentPage)}
        locale={locale}
      />
    </>
  );
};

export default BlogPage;
