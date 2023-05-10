import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import second1 from "../../assets/images/news/Blog Image1.webp";
import second2 from "../../assets/images/news/Blog Image2.webp";
import second3 from "../../assets/images/news/Blog Image3.webp";
import second4 from "../../assets/images/news/Blog Image4.webp";
import second5 from "../../assets/images/news/Blog Image5.webp";
import { MainImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const data = [
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
    image: second1,
  },
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
    image: second2,
  },
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
    image: second4,
  },
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
    image: second5,
  },
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
    image: second3,
  },
];

const NewsAndInformation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="" className="main_padding w-full pt-40 ">
        <div className=" max-w-[1440px] mx-auto">
          <h1 className="text-3xl text-primary font-medium leading-[180%] text-center">
            What’s new at Taasco
          </h1>
          <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-10 mt-12">
            {data.map((item, idx) => (
              <Link
                to={idx}
                key={idx}
                className="grid hover:scale-105 duration-300"
              >
                <div className="rounded-[4px] overflow-hidden flex items-center justify-center sm:aspect-[16/10] aspect-[16/8]">
                  <MainImage
                    src={item.image}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="mt-3 bg-lightBlue w-max px-3 py-1 rounded-[4px] font-semibold text-[#3056D3] text-[9px]">
                  {item.date}
                </span>
                <h4
                  to={idx}
                  className="mt-[10px] font-normal text-primary sm:text-lg text-base sm:leading-[140%] leading-[140%] tracking-[-0.04em]"
                >
                  {item.title}
                </h4>
                <p className="mt-3 line-clamp-2 font-light text-primary text-[12px] leading-[140%]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsAndInformation;
