import { Button } from "@/components/ui/button";
import { Download, LinkIcon } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-24">
      <div className="flex gap-5 items-center justify-center">
        <h1 className="text-[32px] md:text-[48px] font-bold">About Me</h1>
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
        >
          <LinkIcon className="!w-[24px] !h-[24px]" />
        </Button>
      </div>

      <div className="container flex flex-col gap-10 p-0 py-10 lg:px-28 text-[24px]">
        <p>
          As a Frontend Developer with over 5 years of experience, I specialize
          in technologies like React, Next.js, and TypeScript. I'm deeply
          passionate about technological innovation and continuous learning in
          the software development ecosystem.
        </p>
        <p>
          I'm an active contributor to open-source development, consistently
          expanding my technical skills and sharing knowledge through community
          initiatives and technical content creation.
        </p>
        <p>
          My technical interests span web and frontend technologies, with a
          focus on creating high-performance, scalable applications. I'm
          committed to staying at the forefront of emerging web development
          trends.
        </p>
        <p>
          My long-term vision includes deepening my Software Engineering
          expertise and eventually establishing my own IT company, with
          aspirations to work on innovative technological solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
