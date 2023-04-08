import { Link } from "gatsby";
import { MainImage } from "gatsby-plugin-image";
import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="main_padding fixed top-10 w-full flex items-center justify-between select-none">
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
          className="object-contain h-full w-auto select-none max-h-[60px]"
        />
      </div>
      <div className="flex items-center gap-8">
        <Link className="capitalize font-medium text-lg text-primary cursor-pointer">
          Home
        </Link>
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
    </div>
  );
};

export default Header;
