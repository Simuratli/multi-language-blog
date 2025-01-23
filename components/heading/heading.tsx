import React from "react";
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
