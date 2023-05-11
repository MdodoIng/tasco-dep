import { Link } from "gatsby";
import { MainImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const Header = ({ isLanguage, setIsLanguage }) => {
  const [isToggle, setIsToggle] = useState(false);

  const languageSwitch = () => {
    if (isLanguage === false) {
      return (
        setIsLanguage(true),
        typeof window !== undefined &&
          window.localStorage.setItem("lag", "arabic")
      );
    } else
      return (
        setIsLanguage(false),
        typeof window !== undefined &&
          window.localStorage.setItem("lag", "english")
      );
  };

  function languageFinder(lag) {
    switch (lag) {
      case "arabic":
        return setIsLanguage(true);
      case "english":
        return setIsLanguage(false);
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const lag = window.localStorage.getItem("lag");

      console.log(lag);
      window.addEventListener("load", () => languageFinder(lag));

      languageFinder(lag);

      return () => {
        window.removeEventListener("load", () => languageFinder(lag));
      };
    }
  }, []);

  console.log(isLanguage);
  return (
    <div className="main_padding fixed pt-4 w-full  select-none z-[500] pb-2 backdrop-blur-[6px] shadow-sm">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between relative h-[90px]">
        <Link
          to="/"
          onClick={() => typeof window !== undefined && window.scrollTo(0, 0)}
          className="cursor-pointer"
        >
          <MainImage
            src={logo}
            alt="logo"
            loading="lazy"
            className="object-contain h-full w-auto select-none sm:max-h-[50px] max-h-[40px]"
          />
        </Link>
        <div className="lg:flex hidden items-center gap-8">
          <Link
            to="#about_us"
            className="capitalize font-medium text-base text-primary cursor-pointer"
          >
            {isLanguage ? "معلومات عنا" : "About us"}
          </Link>
          <Link
            to="#services"
            className="capitalize font-medium text-base text-primary cursor-pointer"
          >
              {isLanguage ? "خدمات" : "Services"}
          </Link>
          <Link
            to="#contact_us"
            className="capitalize font-medium text-base text-white px-4 py-3 bg-primary rounded-[4px]"
          >
             {isLanguage ? "اتصل بنا" : "Contact us"}
          </Link>
        </div>

        {/* tab menu */}

        <div
          onClick={() => setIsToggle(!isToggle)}
          className="relative w-[30px] h-[22px] lg:hidden flex items-center justify-center p-[2px]"
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
              to="#about_us"
              onClick={() => setIsToggle(false)}
              className="capitalize font-medium text-lg text-primary cursor-pointer"
            >
               {isLanguage ? "معلومات عنا" : "About us"}
            </Link>
            <Link
              to="#services"
              onClick={() => setIsToggle(false)}
              className="capitalize font-medium text-lg text-primary cursor-pointer"
            >
             {isLanguage ? "خدمات" : "Services"}
            </Link>
            <Link
              to="#contact_us"
              onClick={() => setIsToggle(false)}
              className="capitalize font-medium text-lg text-primary cursor-pointer"
            >
             {isLanguage ? "اتصل بنا" : "Contact us"}
            </Link>
          </div>
        </div>

        <button
          onClick={languageSwitch}
          className="absolute right-0 -top-2 font-light text-primary text-sm"
        >
          {isLanguage ? "English" : "عربى"}
        </button>
      </div>
    </div>
  );
};

export default Header;
