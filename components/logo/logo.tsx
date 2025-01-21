import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center text-black">
      <Image width={40} height={20} src="/images/logo.svg" alt="Logo" />
      <span className="font-bold">THE BLOG</span>
    </Link>
  );
};

export default Logo;
