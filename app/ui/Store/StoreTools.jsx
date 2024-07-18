"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const StoreTools = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="mt-[42px] md:mt-10 w-screen">
      <div className="w-full px-[25px] py-[30px] md:px-[98px] md:py-[38px] bg-[#9A5CF50F] bg-opacity-[6%] flex flex-col justify-center items-center">
        <div className="max-w-[355px] md:max-w-full w-full text-xs md:text-xl flex justify-between">
          <div className="w-fit flex items-center">
            {/* Filter */}
            <div className="w-fit flex items-center">
              <div>
                <div
                  onClick={() => {
                    setOpenFilter(!openFilter);
                  }}
                  className="w-fit flex justify-center items-center cursor-pointer"
                >
                  <Image
                    className="object-contain"
                    src="/filter.svg"
                    alt="filter"
                    width={25}
                    height={25}
                  />
                  <p className="ml-[9px] md:ml-3 font-normal">Filter</p>
                </div>
                {openFilter && (
                  <div className="w-[307px] sm:w-[462px] h-fit border-[1px] rounded-2xl border-[#858585] bg-[#FFFFFF] absolute top-[393px] left-[10%] sm:top-[413px] sm:left-[92px] xl:top-[470px] xl:left-[202px] z-10 overflow-hidden">
                    <div className="w-full pt-[13px] pb-[17px] px-8 rounded-2xl bg-[#F5F7FF] flex flex-col justify-center items-center">
                      <p className="text-base text-[#000000] font-bold">
                        Filters
                      </p>

                      {/* Clear filter button */}
                      <button className="mt-[9px] w-[236px] py-2 border-2 rounded-[50px] text-sm font-[600] text-[#A2A6B0] border-[#A2A6B0] flex justify-center items-center">
                        Clear Filter
                      </button>
                    </div>

                    <div className="w-full bg-white">
                      <div className="w-full px-5 py-3 border-b-[1px] border-[#000000]">
                        <p className="text-sm font-[600] text-primaryMain">
                          Plant type
                        </p>

                        <div className="mt-[30px] w-full flex flex-col gap-[10px]">
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Indoor Plants</p>
                            <p>2</p>
                          </div>
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Outdoor Plants</p>
                            <p>2</p>
                          </div>
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Seasonal Plants</p>
                            <p>2</p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full px-5 py-3 border-b-[1px] border-[#000000]">
                        <p className="text-sm font-[600] text-primaryMain">
                          Pot type
                        </p>

                        <div className="mt-[30px] w-full flex flex-col gap-[10px]">
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Hydroponics</p>
                            <p>2</p>
                          </div>
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Traditional</p>
                            <p>2</p>
                          </div>
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Seasonal Plants</p>
                            <p>2</p>
                          </div>
                        </div>

                        <p className="mt-[10px] text-[13px] leading-[27.3px] font-bold">
                          Material
                        </p>

                        <div className="mt-[10px] w-full flex flex-col gap-[10px]">
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>FRP</p>
                            <p>2</p>
                          </div>
                          <div className="w-full text-[13px] leading-[27.3px] text-[#000000] flex justify-between items-center">
                            <p>Ceramic</p>
                            <p>2</p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full px-5 py-5">
                        <div className="w-full flex justify-between items-center">
                          <p className="text-sm font-bold text-[#000000]">
                            Filter Name
                          </p>

                          <RiArrowDownSLine />
                        </div>

                        <button className="mt-[10px] w-full py-2 text-sm font-[600] text-[#FFFFFF] rounded-[50px] flex flex-col justify-center items-center bg-primaryMain">
                          Apply Filters (2)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Image
                className="object-contain hidden md:flex ml-[24px]"
                src="/gridRound.svg"
                alt="gridRound"
                width={28}
                height={28}
              />
              <Image
                className="object-contain hidden md:flex ml-[24px]"
                src="/list.svg"
                alt="list"
                width={24}
                height={24}
              />
            </div>

            <div className="hidden md:flex ml-[30px] mr-[34px] w-[2px] h-[37px] bg-[#9F9F9F]" />

            <div className="w-fit hidden md:flex items-center">
              <p className="ml-[9px] text-base font-normal">
                Showing 1–16 of 32 results
              </p>
            </div>
          </div>

          {/* Sort by, Default */}
          <div className="w-fit flex xl:gap-[29px] justify-center items-center">
            <div className="w-fit hidden lg:flex justify-end items-center">
              <p className="font-normal mr-[20px]">Show</p>
              <p className="px-[18px] py-3 rounded-full font-normal bg-white flex justify-center items-center">
                16
              </p>
            </div>

            <div className="w-fit flex md:hidden lg:flex justify-end items-center">
              <p className="font-normal mr-[20px]">Sort by</p>
              <p className="px-8 py-3 rounded-[53px] font-normal bg-white flex justify-center items-center">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 hidden w-full px-8 md:flex lg:hidden gap-[29px] justify-end items-center">
        <div className="w-fit flex justify-end items-center">
          <p className="font-normal mr-[20px]">Show</p>
          <p className="px-[18px] py-3 rounded-full font-normal bg-white flex justify-center items-center">
            16
          </p>
        </div>

        <div className="w-fit flex justify-end items-center">
          <p className="font-normal mr-[20px]">Sort by</p>
          <p className="px-8 py-3 rounded-[53px] font-normal bg-white flex justify-center items-center">
            Default
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreTools;
