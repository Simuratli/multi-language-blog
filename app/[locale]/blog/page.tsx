import Card from "@/components/card/card";
import Paging from "@/components/paging/paging";
import Popular from "@/containers/popular/popular";
import { CARD_SIZE_ENUM } from "@/types/enums";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-10">
        <Card
          size={CARD_SIZE_ENUM.MEDIUM}
          date="2021-09-09"
          id="123"
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*liYz-YLEZY9SYvesH4OUlg.png"
          title="Web Səhifələr Necə Render Olunur: Client-Side Render (CSR), Server-Side Render(SSR) və Incremental Static Regeneration(İSR) İzahı"
        />
        <Card
          size={CARD_SIZE_ENUM.MEDIUM}
          date="2021-09-09"
          id="123"
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*liYz-YLEZY9SYvesH4OUlg.png"
          title="Web Səhifələr Necə Render Olunur: Client-Side Render (CSR), Server-Side Render(SSR) və Incremental Static Regeneration(İSR) İzahı"
        />
        <Card
          size={CARD_SIZE_ENUM.MEDIUM}
          date="2021-09-09"
          id="123"
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*liYz-YLEZY9SYvesH4OUlg.png"
          title="Web Səhifələr Necə Render Olunur: Client-Side Render (CSR), Server-Side Render(SSR) və Incremental Static Regeneration(İSR) İzahı"
        />
        <Card
          size={CARD_SIZE_ENUM.MEDIUM}
          date="2021-09-09"
          id="123"
          image="https://miro.medium.com/v2/resize:fit:720/format:webp/1*liYz-YLEZY9SYvesH4OUlg.png"
          title="Web Səhifələr Necə Render Olunur: Client-Side Render (CSR), Server-Side Render(SSR) və Incremental Static Regeneration(İSR) İzahı"
        />
      </div>
      <Paging />
    </>
  );
};

export default BlogPage;
