"use client";
import React from "react";

const Subscribe = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open("https://buttondown.com/simuratli", "popupwindow");
  };

  return (
    <div className="text-center mt-[100px] pt-10">
      <h1 className="font-bold text-[36px] mb-5">JOIN OUR NEWSLETTER</h1>

      <form
        action="https://buttondown.com/api/emails/embed-subscribe/simuratli"
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        className="embeddable-buttondown-form w-full  border-gray-300 rounded-lg "
      >
        <div className="flex gap-5 items-center">
          <input
            type="email"
            placeholder="Enter your email..."
            name="email"
            id="bd-email"
            className="w-full outline-none flex-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="submit"
            value="Subscribe"
            className="w-full p-3 flex-1 bg-[var(--yellow)] text-white font-bold rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </div>

        <p className="mt-4 text-center text-gray-500 text-sm">
          <a
            href="https://buttondown.com/refer/simuratli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Subscribe;
