import { MainImage } from "gatsby-plugin-image";
import React from "react";

import image1 from "../assets/images/hero images1.webp";
import image2 from "../assets/images/hero images2.webp";
import image3 from "../assets/images/hero images3.webp";
const Hero = () => {
  const ImageBox = ({ image, position }) => (
    <span
      style={{
        boxShadow: "12px 20px 54px 0px #253B6E40",
      }}
      className={`aspect-[1/1.1] sm:max-w-[200px] max-w-[140px] h-auto rounded-[10px] border-[10px] border-[#E3ECFF] absolute ${position}`}
    >
      <div className="rounded-[5px] overflow-hidden">
        <MainImage
          src={image}
          alt="images1"
          width={100}
          height={100}
          loading="lazy"
          className="object-cover h-full w-full "
        />
      </div>
    </span>
  );

  return (
    <div className="main_padding w-full pt-40 sm:h-screen">
      <div className="mx-auto max-w-[1550px] sm:grid grid-cols-2 flex flex-col h-full">
        <div className="lg:w-max flex flex-col items-start lg:shrink-0">
          <h1 className="lg:text-5xl text-4xl font-semibold leading-[125%] tracking-[-0.04em] text-primary  max-w-[610px]">
            We provide you the quality with perfect credibility
          </h1>
          <p className="text-base leading-[175%] tracking-[0.01em] text-primary mt-[15px] font-normal max-w-[520px]">
            Dictum leo velit id a feugiat accumsan vitae aliquam. Ipsum cras
            faucibus lectus diam nunc eget. Massa dictum massa eu semper
            pharetra ac. Sit velit sapien in molestie nunc. Facilisis ultricies.
          </p>
          <button className="px-5 py-3 rounded-[5px] border-[1.5px] border-primary font-light tracking-[-0.03em] text-primary mt-7">
            View all services
          </button>
        </div>
        <div className="w-full h-full relative flex items-center justify-center max-sm:min-h-[450px]">
          <ImageBox image={image1} position="sm:top-2 top-16 -rotate-45 " />
          <ImageBox image={image2} position="bottom-10 left-0 rotate-[12deg] " />
          <ImageBox
            image={image3}
            position="bottom-10 sm:right-0 -right-10 -rotate-[20.deg]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
