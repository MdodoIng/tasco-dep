import React from "react";
import groupIcon from "../assets/icons/group.svg";
import eyeIcon from "../assets/icons/eye.svg";
import { MainImage } from "gatsby-plugin-image";

const AboutUs = () => {
  return (
    <div className="main_padding  mt-40">
      <div className="max-w-[1550px] mx-auto grid grid-cols-2 gap-10">
        <div>
          <span>
            <MainImage
              src={groupIcon}
              alt="icon"
              width={50}
              height={50}
              loading="lazy"
              className="object-contain max-h-[60px] h-full w-auto"
            />
          </span>
          <h2 className="font-medium text-primary text-2xl leading-[180%] tracking-[180%] mt-2">
            About us
          </h2>
          <p className="font-light text-primary text-lg leading-[180%] mt-2">
            TAASCO Interiors & fit-outs is one of the modern interior fit-out
            companies in KSA. With new generation methods and technology we
            offer turnkey interior solutions, flooring, ceiling, gypsum
            partition, joinery works, curtain, blinds wallpaper etc. AI design
            innovates the company's interior spaces with the help of design and
            technology. We are experts in designing and executing architectural
            plans in addition to designing and building projects.
          </p>
        </div>
        <div>
          <span>
            <MainImage
              src={eyeIcon}
              alt="icon"
              width={50}
              height={50}
              loading="lazy"
              className="object-contain max-h-[60px] h-full w-auto"
            />
          </span>
          <h2 className="font-medium text-primary text-2xl leading-[180%] tracking-[180%] mt-2">
            Vision
          </h2>
          <p className="font-light text-primary text-lg leading-[180%] mt-2">
            Our vision is to maintain and develop our presence as a leading
            contracting company in the market, whose reputation is built on
            trust thatwe provide our clients with high quality and efficient
            service through innovative applications of engineering capability
            and technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
