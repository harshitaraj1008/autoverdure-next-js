"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navItems } from "../constant/data";
import { usePathname } from "next/navigation";

const Navbar = () => {
    let pathname = usePathname();
    if (pathname) {
        pathname = pathname.split("/").pop();
    } else {
        pathname = "";
    }

  if (pathname === "about-us") {
    pathname = "about us";
  } else if (pathname === "") {
    pathname = "home";
  }

  return (
    <div className="w-full px-4 py-[19px] md:pl-[51px] md:pr-[27.53px] xl:pl-[77.34px] xl:pr-[77.34px] bg-transparent z-10 flex justify-between items-center absolute top-0" style={{paddingLeft: "40px", paddingRight: "40px"}}>
      {/* Logo and Company Name */}
      <Link
        href="/"
        className="gap-[10px] no-underline text-black flex justify-center items-center"
      >
        <div className="object-contain w-[70px] h-[70px]">
          <Image src="/logoHD.png" alt="logo" width={70} height={70} unoptimized={true} priority style={{marginBottom: '10px'}}/>
        </div>
        <p className="text-sm leading-[28.8px] fontText uppercase text-center font-medium" style={{fontSize: '1.1rem'}}>
          Auto Verdure
        </p>
      </Link>

      {/* Hamburger Icon */}
      <div className="xl:hidden w-[32px] h-[32px] object-contain cursor-pointer">
        <Image src="/hamburger.svg" alt="hamburger" width={32} height={32} />
      </div>

      {/* Nav Items */}
      <div className="hidden xl:block" style={{marginLeft: "197px"}}>
        <ul className="gap-16 flex justify-center items-center">
          {navItems.map((item, index) => (
            <Link
              className="text-sm gap-1 flex justify-center items-center text-primaryGrayscale no-underline list-none font-normal leading-6"
              key={index}
              href={item.url}
            >
              <li
                className={
                  item.title === pathname
                    ? "font-bold capitalize"
                    : "font-normal hover:font-bold capitalize"
                }
                
              >
                {item.title}
              </li>
              <div
                className={
                  item.title === "contact" ? "flex hover:font-bold" : "hidden"
                }
              >
                <Image
                  src="/downArrow.svg"
                  alt="downArrow"
                  width={16}
                  height={16}
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Search Bar, Cart, User Avatar */}
      <div className="hidden xl:flex gap-[15px]">
        <div className="w-[240px] h-[50px] pr-[17px] flex justify-between items-center border-2 border-primaryBg rounded-[999px] bg-secondaryBg">
          <input
            className="pl-5 py-[16.6px] mr-[17px] rounded-[999px] border-r-2 w-full h-full focus:outline-black rounded-r-none bg-secondaryBg"
            type="text"
            placeholder="Search"
            autoComplete="false"
            spellCheck="false"
          />
          <div className="cursor-pointer">
            <Image
              className="object-contain w-4 h-4"
              src="/search.svg"
              alt="search"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="gap-4 flex justify-center items-center">
          <Link href="/cart" className="w-[24.53px] h-[24.53px]">
            <Image
              className="object-contain"
              src="/cart.svg"
              alt="cart"
              width={24.53}
              height={24.53}
            />
          </Link>
          <div className="w-[24.53px] h-[24.53px]">
            <Link href="/profile" className="w-[24.53px] h-[24.53px]">
              <Image
                className="object-contain"
                src="/avatar.svg"
                alt="cart"
                width={24.53}
                height={24.53}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
