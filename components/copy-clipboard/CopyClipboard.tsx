"use client";
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "react-toastify";

const CopyClipboard = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    toast("Copied!");
  };
  return (
    <>
      <Copy onClick={handleCopy} className="cursor-pointer" color="#757575" />
    </>
  );
};

export default CopyClipboard;
