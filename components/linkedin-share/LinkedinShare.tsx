"use client";
import { Linkedin } from "lucide-react";
import React from "react";

const LinkedinShare = () => {
  const handleShareLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
      "_blank",
    );
  };
  return (
    <>
      <Linkedin
        onClick={handleShareLinkedin}
        className="cursor-pointer"
        color="#757575"
      />
    </>
  );
};

export default LinkedinShare;
