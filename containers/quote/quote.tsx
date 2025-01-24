import Quote from "@/components/quote/quote";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

const QuoteGeneral = () => {
  return (
    <div className="flex items-end flex-col gap-5 sm:flex-row space-x-4">
      <Quote />
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://pravoslavie.ru/sas/image/100538/53893.x.jpg" />
          <AvatarFallback>DY</AvatarFallback>
        </Avatar>
        <p className="text-[var(--yellow)] font-bold">Dostoyevsky</p>
      </div>
    </div>
  );
};

export default QuoteGeneral;

QuoteGeneral.Skeleton = function QuoteSkeleton() {
  return (
    <div className="flex items-end flex-col gap-5 sm:flex-row space-x-4">
      <Skeleton className="h-[200px] w-[100%] rounded" />
      <div className="flex items-center gap-2">
        <Skeleton className="rounded-full h-[40px] w-[40px]" />
        <Skeleton className="rounded h-[20px] w-[100px]" />
      </div>
    </div>
  );
};
