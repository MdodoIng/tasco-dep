import React from "react";
import logo from "../assets/logo.svg";
import heroImage from "../assets/coming soon .webp";
import { MainImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <>
    <title>tasco </title>
    <meta name="description" content="welcome" />
      <div className="flex items-center justify-center flex-col m-8 h-screen">
        <MainImage
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="object-contain object-center w-auto h-20"
        />
        <MainImage
          src={heroImage}
          width={100}
          height={100}
          alt="logo"
          className="object-contain object-center w-auto h-[70%]"
        />
      </div>
    </>
  );
};

export default index;
