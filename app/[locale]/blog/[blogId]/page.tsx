import BlogHeader from "@/components/blog-header/blog-header";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="mt-24">
      <BlogHeader />
      <div className="relative w-full h-[343px] md:h-[560px] mt-[40px] ">
        <Image
          alt=""
          className="rounded-xl shadow-md object-cover w-[100%] h-[100%]"
          fill
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*QdJYhw1FqxBRXRc5_5MhKA.png"
        />
      </div>

      <div className="mt-[40px] w-full md:w-[60%] mx-auto *:text-[19px] *:font-light">
        <p>
          Black-and-white photography is a timeless art form that transcends
          trends and technology. By stripping away color, this medium emphasizes
          composition, texture, and emotion, creating images that are both
          powerful and evocative.
        </p>
        <p>
          Black-and-white photography challenges photographers to think beyond
          color and focus on the essence of their subjects. By mastering this
          art form, you can create images that are not only visually compelling
          but also deeply meaningful. Pick up your camera, embrace the shades of
          gray, and start your journey into the world of black-and-white
          photography today.
        </p>
      </div>
    </div>
  );
};

export default Page;
