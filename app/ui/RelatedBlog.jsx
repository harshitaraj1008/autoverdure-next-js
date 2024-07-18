import React from "react";
import GuideCard from "./GuideCard.jsx/GuideCard";
import Link from "next/link";
import { guides } from "../constant/data";

const RelatedBlog = ({ title, description }) => {
  return (
    <div className="w-full px-4 md:px-[70px] xl:px-[120px] 2xl:px-[250px] flex flex-col justify-center items-center">
      <div className="mt-20 w-full flex flex-col justify-center items-center">
        <div className="sm:w-[352px] md:w-full xl:w-[872px] flex flex-col gap-5 justify-center items-center md:justify-center md:items-center md:text-center">
          <p className="text-[40px] leading-[48px] -tracking-[1px] text-primaryGrayscale font-normal capitalize text-center">
            {title}
          </p>
          <p className="text-sm leading-6 font-normal text-secondaryGrayscale text-center md:text-center">
            {description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[41px] md:gap-y-[57px] xl:gap-y-[73px] md:gap-x-[55px] xl:gap-x-[41px]">
          {guides.map((guide, index) => (
            <GuideCard guide={guide} key={index} />
          ))}
        </div>
      </div>

      {/* Explore More */}
      <div className="mt-[33px] w-fit px-[42px] py-[18px] text-base font-normal border-[1px] border-primaryGrayscale rounded-[100px] cursor-pointer">
        <Link href="#">Explore More</Link>
      </div>
    </div>
  );
};

export default RelatedBlog;
