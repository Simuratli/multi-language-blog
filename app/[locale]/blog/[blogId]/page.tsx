import BlogHeader from "@/components/blog-header/blog-header";
import { Skeleton } from "@/components/ui/skeleton";
import client, { urlFor } from "@/sanity";
import { PostType } from "@/types/global.types";
import groq from "groq";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { CustomCodeBlock } from "@/utils/custom-code-block";
import { Metadata } from "next";
import { blogContentToString } from "@/utils/blockcontent-to-string";

interface BlogIdPageProps {
  params: Promise<{
    locale: "az" | "en";
    blogId: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogIdPageProps): Promise<Metadata> {
  const { blogId, locale } = await params;
  const postsQuery = groq`*[_type == "post" && slug.current == $blogId][0]`;
  const post: PostType | null = await client.fetch(postsQuery, { blogId });
  const title = post ? post.name[locale] : "Unkai Tech Blog";
  const description = post
    ? blogContentToString(post.body[locale])
    : "Unkai Tech Blog is a multilingual platform (Azerbaijani and English) dedicated to front-end development, offering insights, tutorials, and updates for developers.";
  const image = post ? urlFor(post.mainImage).url() : "/images/bg.png";

  return {
    title: title,
    description: description,
    openGraph: {
      images: [image],
    },
  };
}

const Page = async ({ params }: BlogIdPageProps) => {
  const { locale, blogId } = await params;
  const postsQuery = groq`*[_type == "post" && slug.current == $blogId]{
    ...,
    author->{...}
    }[0]`;

  const post: PostType | null = await client.fetch(postsQuery, { blogId });

  if (!post) {
    return <Page.Skeleton />;
  }
  console.log(post);
  return (
    <div className="mt-24">
      <BlogHeader post={post} locale={locale} />
      <div className="relative w-full h-[343px] md:h-[560px] mt-[40px] ">
        <Image
          alt={post.name[locale]}
          className="rounded-sm shadow-md object-cover w-[100%] h-[100%]"
          fill
          src={urlFor(post.mainImage).url()}
        />
      </div>

      <div className="mt-[40px] w-full md:w-[80%] mx-auto *:leading-relaxed *:mb-6 *:text-gray-800">
        <PortableText value={post.body[locale]} components={CustomCodeBlock} />
      </div>
    </div>
  );
};

export default Page;

Page.Skeleton = function BlogPageSkeleton() {
  return (
    <div className="mt-24">
      <BlogHeader.Skeleton />
      <div className="relative w-full h-[343px] md:h-[560px] mt-[40px] ">
        <Skeleton className="rounded-xl shadow-md object-cover w-[100%] h-[100%]" />
      </div>

      <div className="mt-[40px] w-full md:w-[60%] mx-auto *:font-light">
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
        <Skeleton className="rounded-sm mb-5 shadow-md object-cover w-full h-[40px]" />
      </div>
    </div>
  );
};
