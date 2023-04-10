import { Link } from "gatsby";
import { MainImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="main_padding fixed top-10 w-full  select-none z-[500]">
      <div className="mx-auto max-w-[1550px] flex items-center justify-between">
        <div
          onClick={() => typeof window !== undefined && window.scrollTo(0, 0)}
          className="cursor-pointer"
        >
          <MainImage
            src={logo}
            alt="logo"
            width={100}
            height={100}
            loading="lazy"
            className="object-contain h-full w-auto select-none sm:max-h-[60px] max-h-[40px]"
          />
        </div>
        <div className="lg:flex hidden items-center gap-8">
          <Link className="capitalize font-medium text-lg text-primary cursor-pointer">
            About us
          </Link>
          <Link className="capitalize font-medium text-lg text-primary cursor-pointer">
            Services
          </Link>
          <button className="capitalize font-medium text-lg text-white px-4 py-3 bg-primary rounded-[4px]">
            Contact us
          </button>
        </div>

        {/* tab menu */}

        <div
          onClick={() => setIsToggle(!isToggle)}
          className="relative w-[30px] h-[22px] flex items-center justify-center p-[2px]"
        >
          <span
            className={`w-full bg-primary border border-primary absolute duration-300  ${
              isToggle ? "rotate-45" : "top-0"
            }`}
          />
          <span
            className={`w-full bg-primary border border-primary absolute duration-200 ${
              isToggle && "opacity-0"
            }`}
          />
          <span
            className={`w-full bg-primary border border-primary absolute duration-300  ${
              isToggle ? "-rotate-45" : " bottom-0"
            }`}
          />

          {/*  */}
          <div
            className={`fixed top-24  bg-[#D2F6FF] rounded-lg gap-3 p-10 grid place-items-center duration-300 ${
              isToggle ? "right-10" : "-right-96"
            }`}
          >
            <Link
              onClick={() => setIsToggle(false)}
              className="capitalize font-medium text-lg text-primary cursor-pointer"
            >
              About us
            </Link>
            <Link
              onClick={() => setIsToggle(false)}
              className="capitalize font-medium text-lg text-primary cursor-pointer"
            >
              Services
            </Link>
            <Link
              onClick={() => setIsToggle(false)}
              className="capitalize font-medium text-lg text-primary cursor-pointer"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
