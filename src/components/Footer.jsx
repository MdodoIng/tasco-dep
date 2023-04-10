import React from "react";
import logo from "../assets/logo white.svg";
import { MainImage } from "gatsby-plugin-image";

import locationIcon from "../assets/icons/location.svg";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import fbIcon from "../assets/icons/facebook.svg";
import igIcon from "../assets/icons/instagram.svg";
import liIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import { Link } from "gatsby";

const contact_us = [
  {
    title: "Saudi Arabia",
    icon: locationIcon,
  },
  {
    title: "0558895952, 0558886204 ",
    icon: phoneIcon,
  },
  {
    title: "info@taasco.in",
    icon: mailIcon,
  },
];

const follow_us = [
  {
    icon: igIcon,
    link: "",
  },
  {
    icon: fbIcon,
    link: "",
  },
  {
    icon: liIcon,
    link: "",
  },
  {
    icon: twitterIcon,
    link: "",
  },
];

const Footer = () => {
  return (
    <div className="bg-primary main_padding py-14 mt-20 ">
      <div className="flex justify-between items-start flex-wrap max-sm:flex-col sm:gap-10 gap-8 max-w-[1550px] mx-auto">

      
      <div className="">
        <MainImage
          src={logo}
          alt="logo"
          onClick={() => typeof window !== "undefined" && window.scrollTo(0, 0)}
          width={100}
          height={100}
          loading="lazy"
          className="object-contain max-h-[60px] w-auto cursor-pointer"
        />
        <p className="text-lightBlue opacity-80 sm:text-base text-sm tracking-[0.01em] leading-[170%] sm:mt-7 mt-4 max-w-[300px]">
          Dictum leo velit id a feugiat accumsan vitae aliquam. Ipsum cras
          faucibus lectus diam nunc eget.
        </p>
      </div>
      {/* Contact us */}

      <div className="grid h-max sm:gap-5 gap-4">
        <h2 className="font-bold sm:text-xl text-lg leading-[180%] text-[rgba(255,255,255,0.88)]">
          Contact us
        </h2>
        <ul className="grid h-max sm:gap-4 gap-3">
          {contact_us.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="sm:p-3 p-2 bg-[#2BBDE026] sm:rounded-[16px] rounded-xl sm:h-12 sm:w-12 h-8 w-8">
                <MainImage
                  src={item.icon}
                  alt="icon"
                  loading="lazy"
                  className="object-contain w-full h-full"
                />
              </span>
              <p className="font-medium text-[rgba(255,255,255,0.88)] sm:text-xl text-base">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/*Follow us on  */}

      <div className="grid h-max sm:gap-5 gap-4">
        <h2 className="font-bold sm:text-xl text-lg leading-[180%] text-[rgba(255,255,255,0.88)]">
          Follow us on
        </h2>
        <ul className="flex gap-4">
          {follow_us.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <Link to={item.link} target="_blank" className="sm:p-3 p-2 bg-[#2BBDE026] sm:rounded-[16px] rounded-xl sm:h-12 sm:w-12 h-8 w-8">
                <MainImage
                  src={item.icon}
                  alt="icon"
                  loading="lazy"
                  className="object-contain w-full h-full"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
