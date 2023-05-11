import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { MainImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { graphql } from "gatsby";

const NewsAndInformation = (props) => {
  const [isLanguage, setIsLanguage] = useState("");
  return (
    <div
      className={`min-h-screen ${
        isLanguage ? "font-elMessiri text-right" : "font-LexendDeca"
      }`}
    >
      <Header isLanguage={isLanguage} setIsLanguage={setIsLanguage} />
      <div className="main_padding w-full pt-40 ">
        <div className=" max-w-[1440px] mx-auto">
          <h1 className="text-3xl text-primary font-medium leading-[180%] text-center">
            {isLanguage ? (
              <>
                {" "}
                <span className="font-LexendDeca">TAASCO</span> ما الجديد في
              </>
            ) : (
              "What’s new at Taasco"
            )}
          </h1>
          <div className="grid md:grid-cols-3 xs:grid-cols-2 gap-10 mt-12">
            {props.data.allContentfulNewsAndInfermation.edges.map((item) => (
              <Link
                to={item.node.id}
                key={item.node.id}
                className={`grid hover:scale-105 duration-300 ${isLanguage && "justify-items-end"}`}
              >
                <div className="rounded-[4px] overflow-hidden flex items-center justify-center sm:aspect-[16/10] aspect-[16/8]">
                  <MainImage
                    src={item.node.image.url}
                    alt={`${item.node.image.heading} image`}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="mt-3 bg-lightBlue w-max px-3 py-1 pb-0 rounded-[4px] font-semibold text-[#3056D3] text-[9px]">
                  {isLanguage ? item.next?.createdAt : item.node.createdAt}
                </span>
                <h4 className="mt-[10px] font-normal text-primary sm:text-lg text-base sm:leading-[140%] leading-[140%] tracking-[-0.04em]">
                  {item.node.heading}
                </h4>
                <p className="mt-3 line-clamp-2 font-light text-primary text-[12px] leading-[140%]">
                  {item.node.description.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer isLanguage={isLanguage} />
    </div>
  );
};

export default NewsAndInformation;

export const query = graphql`
  query {
    allContentfulNewsAndInfermation(sort: { createdAt: DESC }) {
      edges {
        node {
          id
          description {
            description
          }
          createdAt(formatString: "MMMM DD, YYYY")
          image {
            url
          }
          heading
          contentRichText {
            raw
          }
        }
        next {
          createdAt(formatString: "MMMM DD, YYYY", locale: "ar-SA")
        }
      }
    }
  }
`;
