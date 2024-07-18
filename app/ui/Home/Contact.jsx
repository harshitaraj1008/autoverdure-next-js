import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="w-full flex px-4 xl:px-[120px] 2xl:px-[250px]">
      <div className="w-full mt-[64.6px] px-[23px] pt-[39px] pb-[20px] xl:pl-[48px] xl:pr-[70px] xl:pt-[36px] xl:pb-[35px] rounded-[24px] bg-primaryCream md:flex flex-col xl:flex-row relative">
        <div className="absolute -top-6 right-[34.6px] md:top-[18px] lg:top-[0px] xl:-top-[17px] md:right-[20.6px] xl:left-[453px]">
          <Image src="blink.svg" alt="blink" width={56.398} height={56.398} />
        </div>
        <div className="hidden xl:flex">
          <div className="w-[433px] h-[372px] rounded-[40px] bg-[#D9D9D9]"></div>
        </div>

        <div className="hidden xl:flex w-[62.613px] h-[44.261px] absolute left-[480px] bottom-[200.43px]">
          <Image
            className="object-contain -rotate-45"
            src="/leaf.png"
            alt="leaf"
            width={62.613}
            height={44.261}
          />
        </div>

        <div className="w-full xl:max-w-[530px] xl:ml-[119px]">
          <p className="mb-4 text-[32px] leading-[48px] -tracking-[0.8px] font-normal">
            Book a call with an expert to guide you through auto farming For a
            desired healthier lifestyle
          </p>
          <p className="w-full text-sm leading-6 font-normal text-secondaryGrayscale">
            At Auto verdure, we know that selecting the right plants for your
            space can be a daunting task. That&apos;s why we offer personalized
            plant consultation services to help you make informed decisions
            about your indoor and outdoor greenery.
          </p>
          <div className="mt-6 w-fit px-[42px] py-[18px] rounded-[100px] text-base bg-primaryMain text-white font-normal cursor-pointer">
            <p>Contact us</p>
          </div>
        </div>

        <div className="absolute -bottom-[19px] right-[10px] xl:bottom-7 xl:left-[395px]">
          <Image src="/zigzag.svg" alt="zig-zag" width={99} height={99} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
