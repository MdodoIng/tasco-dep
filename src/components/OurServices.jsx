import { MainImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import CCTV_Networking from "../assets/images/CCTV Networking.webp";
import CCTV_Networking2 from "../assets/images/CCTV Networking2.webp";
import Civil_Works from "../assets/images/Civil Works.webp";
import Civil_Works2 from "../assets/images/Civil Works2.webp";
import Construction_and_Interior_decoration from "../assets/images/Construction and Interior decoration.webp";
import Construction_and_Interior_decoration2 from "../assets/images/Construction and interior decoration2.webp";
import Electric_Works from "../assets/images/Electric Works.webp";
import Electric_Works2 from "../assets/images/Electrical works2.webp";
import Equipment_Rental_and_Transportation from "../assets/images/Equipment Rental and Transportation.webp";
import Equipment_Rental_and_Transportation2 from "../assets/images/Equipment Rental and Transportation2.webp";
import Fire_Safety_Management from "../assets/images/Fire & Safety Management.webp";
import Fire_Safety_Management2 from "../assets/images/Fire & Safety Management2.webp";
import HVAC from "../assets/images/HVAC.webp";
import HVAC2 from "../assets/images/HVAC2.webp";
import joinery from "../assets/images/Joinery.webp";
import joinery2 from "../assets/images/Joinery2.webp";
import plumbing_works from "../assets/images/Plumbing Works.webp";
import plumbing_works2 from "../assets/images/Plumbing works2.webp";

import arrow from "../assets/icons/arrow.svg";

const data = [
  {
    title: "Construction and Interior decoration",
    picture: Construction_and_Interior_decoration,
    secondPicture: Construction_and_Interior_decoration2,
    points: [
      {
        title: "Structural works",
      },
      {
        title: "Block works",
      },
      {
        title: "Tile fixing",
      },
      {
        title: "Gypsum works",
      },
      {
        title: "Wooden works",
      },
      {
        title: "Shop fitting",
      },
      {
        title: "Interior decoration",
      },
      {
        title: "Fitout works",
      },
      {
        title: "Fitout works",
      },
    ],
  },
  {
    title: "Joinery",
    picture: joinery,
    secondPicture: joinery2,
    points: [
      {
        title: "Manufacturing of High quality shop fittings",
      },
      {
        title: "Spray paintings",
      },
    ],
  },
  {
    title: "HVAC",
    picture: HVAC,
    secondPicture: HVAC2,
    points: [
      {
        title: "Chillers & chilled water system",
      },
      {
        title: "Air handling units",
      },
      {
        title: "Package units",
      },
      {
        title: "Air and water balancing",
      },
      {
        title: "Testing and commissioning",
      },
    ],
  },
  {
    title: "Plumbing Works",
    picture: plumbing_works,
    secondPicture: plumbing_works2,
    points: [
      {
        title: "Interior and external plumbing works",
      },
      {
        title: "Copper and PVC pipping",
      },
      {
        title: "Fire fighting system, testing and commissioning",
      },
    ],
  },
  {
    title: "Electric Works",
    picture: Electric_Works,
    secondPicture: Electric_Works2,
    points: [
      {
        title: "High voltage switchgears, substations",
      },
      {
        title: "Transformers, cabling networks",
      },
      {
        title: "Low voltage distribution boards, lighting",
      },
      {
        title: "Cabling networks",
      },
      {
        title: "Audio and video systems",
      },
      {
        title: "Fire alarms & security systems",
      },
      {
        title: "Lighting protection systems",
      },
    ],
  },
  {
    title: "CCTV Networking",
    picture: CCTV_Networking,
    secondPicture: CCTV_Networking2,
    points: [
      {
        title: "Security and Surveillance CCTV",
      },
      {
        title: "Networking",
      },
      {
        title: "Access Door",
      },
      {
        title: "Parking Sensors",
      },
    ],
  },
  {
    title: "Fire & Safety Management",
    picture: Fire_Safety_Management,
    secondPicture: Fire_Safety_Management2,
    points: [
      {
        title: "Fire Extinguisher",
      },
      {
        title: "Sprinkler System etc.",
      },
    ],
  },
  {
    title: "Civil Works",
    picture: Civil_Works,
    secondPicture: Civil_Works2,
    points: [
      {
        title: "Concrete Works",
      },
      {
        title: "Drilling & Coring",
      },
      {
        title: "Various Small & Medium Masonry Works",
      },
      {
        title: "Excavation Works",
      },
      {
        title: "Structural Works",
      },
      {
        title: "Floors and Finishing",
      },
    ],
  },
  {
    title: "Equipment Rental and Transportation",
    picture: Equipment_Rental_and_Transportation,
    secondPicture: Equipment_Rental_and_Transportation2,
    points: [
      {
        title:
          "TUV and Aramco certified equipments along with well trained operators and workforce.",
      },
      {
        title: "Cranes and Lifting equipments",
      },
      {
        title: "Earth moving equipments and transportation",
      },
      {
        title: "Power Equipments",
      },
      {
        title: "Heavy Trucks",
      },
    ],
  },
];

const OurServices = () => {
  const [isSelected, setIsSelected] = useState(
    "Construction and Interior decoration"
  );
  return (
    <div className="main_padding mt-40">
      <h1 className="font-medium text-[32px] leading-[180%] text-primary">
        Our Services
      </h1>
      <div className="mt-9 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 max-w-[1280px]">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="w-full relative flex items-end justify-start aspect-square z-10 rounded-[3px] overflow-hidden after:w-full after:absolute after:h-full after:-z-[5] after:bg-gradient-to-t to-transparent from-primary"
          >
            <MainImage
              src={item.picture}
              alt="pic"
              width={100}
              height={100}
              loading="lazy"
              className="absolute w-full h-full object-cover -z-10"
            />
            <p className="font-medium text-white text-base leading-[141%] pl-4 pb-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      {/*  */}

      <div className="mt-40">
        <ul className="grid w-full gap-6">
          {data.map((item, itemIdx) => (
            <li key={itemIdx} className="w-full grid grid-cols-2 gap-3">
              <div
                style={{
                  boxShadow: "0px 20.736px 98.496px rgba(201, 203, 204, 0.3)",
                }}
                className={`grid  rounded-lg border border-[#F3F4FE] ${
                  isSelected === item.title ? "bg-primary" : "bg-white"
                } grid place-items-start p-5 h-min`}
              >
                <span
                  onClick={() => setIsSelected(item.title)}
                  className="flex w-full items-center justify-between"
                >
                  <h1
                    className={`${
                      isSelected === item.title
                        ? "text-[rgba(255,255,255,0.88)]"
                        : "text-black"
                    } text-xl font-medium leading-[180%]`}
                  >
                    {item.title}
                  </h1>
                  <div
                    className={`p-2 rounded-lg overflow-hidden ${
                      isSelected === item.title
                        ? "bg-[#274792]"
                        : "bg-[#3056D30F]"
                    } w-8 h-8 flex items-center justify-center cursor-pointer`}
                  >
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.78177 10.3468L8.78186 10.3469L8.78933 10.3384C9.09143 9.99543 9.22495 9.58187 9.22495 9.17743C9.22495 8.74592 9.04954 8.33862 8.76577 8.01647L8.76585 8.01641L8.75891 8.00884L2.84637 1.55868L2.84065 1.55243L2.83471 1.54637C2.50677 1.21129 1.91114 1.10718 1.50485 1.5223C1.18228 1.85188 1.08455 2.43622 1.47474 2.84244L7.30485 9.17743L1.47033 15.5172L1.46227 15.526L1.45462 15.5351C1.14864 15.8998 1.14624 16.4662 1.50485 16.8326L1.5188 16.8468L1.53379 16.86C1.89844 17.1793 2.4707 17.1804 2.83471 16.8085L2.84029 16.8028L2.84568 16.7969L8.78177 10.3468Z"
                        fill={isSelected === item.title ? "#E3ECFF" : "#3056D3"}
                        stroke={
                          isSelected === item.title ? "#E3ECFF" : "#3056D3"
                        }
                        stroke-width="1.0368"
                      />
                    </svg>
                  </div>
                </span>

                <ul
                  className={`pl-6 list-disc gap-1 grid h-max mt-2 overflow-hidden duration-500 ease-in ${
                    isSelected === item.title ? "max-h-96" : " max-h-0"
                  }`}
                >
                  {item.points.map((point, pointIdx) => (
                    <li
                      key={pointIdx}
                      className="text-white text-sm font-light"
                    >
                      {point.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden">
                <MainImage
                  src={item.secondPicture}
                  alt="image"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={`object-cover w-full h-full duration-500  ${
                    isSelected === item.title ? "max-h-96" : " max-h-0"
                  }`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
