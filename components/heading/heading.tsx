import React from "react";
import { Skeleton } from "../ui/skeleton";
interface HeadingPropTypes {
  children: React.ReactNode;
}
const Heading = ({ children }: HeadingPropTypes) => {
  return (
    <h1 className="text-[32px] md:text-[48px] font-semibold  font-serif text-center">
      {children}
    </h1>
  );
};

export default Heading;
Heading.Skeleton = function HeadingSkeleton() {
  return (
    <h1 className="text-[32px] md:text-[48px] font-semibold  font-serif text-center">
      <Skeleton className="w-[200px] h-[20px]" />
    </h1>
  );
};
