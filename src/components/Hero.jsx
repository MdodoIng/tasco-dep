import React from "react";

const Hero = () => {
  return (
    <div className="main_padding grid grid-cols-2 w-full mt-40">
      <div className="w-full flex flex-col items-start">
        <h1 className="text-5xl font-semibold leading-[125%] tracking-[-0.04em] text-primary">
          We provide you the quality with perfect credibility
        </h1>
        <p className="text-base leading-[175%] tracking-[0.01em] text-primary mt-[15px] font-normal">
          Dictum leo velit id a feugiat accumsan vitae aliquam. Ipsum cras
          faucibus lectus diam nunc eget. Massa dictum massa eu semper pharetra
          ac. Sit velit sapien in molestie nunc. Facilisis ultricie.
        </p>
        <button className="px-5 py-3 rounded-[5px] border-[1.5px] border-primary font-light tracking-[-0.03em] text-primary">
          View all services
        </button>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default Hero;
