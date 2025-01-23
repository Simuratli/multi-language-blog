import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" flex-col gap-8 sm:flex-row flex justify-between items-center py-10">
      <p className="font-semibold text-[14px]">
        © 2025 Blog Template. All rights reserved.
      </p>
      <div className="flex gap-11 items-center">
        <Link className="font-light text-[14px]" href="/privacy">
          Privacy Policy
        </Link>
        <Link className="font-light text-[14px]" href="/terms">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
