import Card from "@/components/card/card";
import { CARD_SIZE_ENUM } from "@/types/enums";
import React from "react";

const Popular = () => {
  return (
    <div className="lg:container mx-auto my-[56px]">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main featured card */}
        <div className="lg:w-2/3 ">
          <Card
            size={CARD_SIZE_ENUM.LARGE}
            date="2021-09-09"
            id="123"
            image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*liYz-YLEZY9SYvesH4OUlg.png"
            title="Web Səhifələr Necə Render Olunur: Client-Side Render (CSR), Server-Side Render(SSR) və Incremental Static Regeneration(İSR) İzahı"
          />
        </div>

        {/* Secondary cards */}
        <div className="flex flex-col gap-5 lg:w-1/3">
          <Card
            size={CARD_SIZE_ENUM.SMALL}
            date="2021-09-09"
            id="1234"
            image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*op-lGnQhzCq1udMIyMd2pA.png"
            title="Mastering LinkedIn Data Extraction: Build a Chrome Extension to Scrape User Details — An Advanced Guide"
          />
          <Card
            size={CARD_SIZE_ENUM.SMALL}
            date="2021-09-09"
            id="1235"
            image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*N9iL29SS2B4-H2w3vz_A2w.png"
            title="Mastering SVG: A Comprehensive Guide to Scalable Vector Graphics for Web Developers"
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
