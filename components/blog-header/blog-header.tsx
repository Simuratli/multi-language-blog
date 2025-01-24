import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Linkedin, Share } from "lucide-react";

const BlogHeader = () => {
  return (
    <div className=" w-full md:w-[60%] mx-auto">
      <div className="mb-[24px] flex items-center gap-5">
        <Avatar className="w-[56px] h-[56px]">
          <AvatarImage src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="font-bold text-[18px] text-[var(--yellow)]">
          Eljan Simuratli
        </h1>
        <p className="text-[14px] text-[var(--dark-gray)]">Nov 29, 2024</p>
      </div>
      <h1 className="text-[32px] md:text-[40px] font-serif mb-[40px]">
        The Art of Black-and-White Photography
      </h1>
      <div className="flex justify-between items-center rounded-2xl p-3 bg-[#F4F4F4]">
        <span className="text-[var(--dark-gray)] text-[14px]">6 Mins Read</span>
        <div className="flex gap-3">
          <Share className="cursor-pointer" color="#757575" />
          <Linkedin className="cursor-pointer" color="#757575" />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
