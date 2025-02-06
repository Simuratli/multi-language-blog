import { Button } from "@/components/ui/button";
import client from "@/sanity";
import { AboutMeType } from "@/types/global.types";
import groq from "groq";
import { Download, LinkIcon } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { headers } from "next/headers";
import React, { Suspense } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

const aboutQuery = groq`
  *[_type == "about"][0]
`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    openGraph: {
      images: ["/aboutbg.png"],
    },
  };
}

const AboutPage = async () => {
  const about: AboutMeType = await client.fetch(aboutQuery);
  if (!about) {
    return <AboutPage.Skeleton />;
  }
  const headersList = headers();
  const locale =
    ((await headersList).get("x-next-intl-locale") as "en" | "az") || "en"; // Default to 'en' if not found
  return (
    <div className="mt-10 md:mt-24">
      <Suspense fallback={<AboutPage.Skeleton />}>
        <div className="flex gap-5 items-center justify-normal md:justify-center">
          <h1 className="text-[32px]  md:text-[48px] font-bold">
            {about.name[locale]}
          </h1>
          <Button
            className="hover:shadow-sm  transition-shadow"
            size="icon"
            variant="link"
          >
            <Download className="!w-[24px] !h-[24px]" />
          </Button>
          <Button
            className="hover:shadow-sm  transition-shadow"
            size="icon"
            variant="link"
            asChild
          >
            <Link href="https://simuratli.com/" target="__blank">
              <LinkIcon className="!w-[24px] !h-[24px]" />
            </Link>
          </Button>
        </div>

        <div className="container flex flex-col gap-10 p-0 py-10 lg:px-28 text-[16px] md:text-[24px]">
          <PortableText value={about.body[locale]} />
        </div>
      </Suspense>
    </div>
  );
};

AboutPage.Skeleton = function AboutSkeleton() {
  return (
    <div className="mt-24">
      <div className="flex gap-5 items-center justify-center">
        <Skeleton className="w-[250px] h-[30px] rounded" />
        <Skeleton className="w-[30px] h-[30px] rounded" />
        <Skeleton className="w-[30px] h-[30px] rounded" />
      </div>

      <div className="container flex flex-col gap-10 p-0 py-10 lg:px-28 text-[24px]">
        <Skeleton className="w-full h-[40px] rounded" />
        <Skeleton className="w-full h-[40px] rounded" />
        <Skeleton className="w-full h-[40px] rounded" />
        <Skeleton className="w-full h-[40px] rounded" />
        <Skeleton className="w-full h-[40px] rounded" />
        <Skeleton className="w-full h-[40px] rounded" />
        <Skeleton className="w-full h-[40px] rounded" />
      </div>
    </div>
  );
};

export default AboutPage;
