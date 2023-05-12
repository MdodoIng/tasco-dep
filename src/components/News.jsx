import { Link } from "gatsby";
import React from "react";

const News = ({ data, isLanguage }) => {
  return (
    <div className="main_padding lg:mt-32 mt-14">
      <div
        className={`max-w-[1440px] mx-auto ${
          isLanguage && "flex flex-col items-end"
        }`}
      >
        <h1 className="text-3xl text-primary font-medium leading-[180%]">
          {isLanguage ? `Taasco ما الجديد في` : "What’s new at Taasco"}
        </h1>
        <div
          className={`mt-8 sm:grid grid-cols-3 flex  ${
            isLanguage && "flex-row-reverse flex items-end"
          }  justify-between w-full overflow-x-scroll gap-10 newsScroll pb-4 max-sm:flex-col `}
        >
          {data.map((item, idx) => (
            <>
              {idx <= 2 && (
                <div
                  key={item.node.id}
                  className={`grid shrink-0 ${isLanguage && "place-items-end"}`}
                >
                  <small className="text-black tracking-[0.02em] text-sm leading-[100%] font-light">
                    {isLanguage ? item.next?.createdAt : item.node.createdAt}
                  </small>
                  <h3 className="mt-3 font-light text-primary text-2xl  leading-[140%] tracking-[-0.03em] max-w-[320px] line-clamp-2">
                    {isLanguage ? item.node.headingArabic : item.node.heading}
                  </h3>
                  <p className="mt-3 font-light leading-[137%] text-base tracking-[-0.03em] text-primary max-w-[400px] line-clamp-3">
                    {isLanguage
                      ? item.node.descriptionArabic.descriptionArabic
                      : item.node.description.description}
                  </p>

                  <Link
                    to={`/news/${item.node.id}`}
                    className="mt-7 font-light text-base underline text-primary underline-offset-4"
                  >
                    {isLanguage ? "اقرأ أكثر" : "Read More"}
                  </Link>
                </div>
              )}
            </>
          ))}
        </div>
        <Link
          to="/news"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
          }}
          className="mt-11 px-5 py-2 flex items-center justify-center text-primary w-max border-[1.5px] border-primary rounded-[5px] font-light text-base tracking-[-0.03em] cursor-pointer select-none"
        >
          {isLanguage ? `مشاهدة الكل` : "View All"}
        </Link>
      </div>
    </div>
  );
};

export default News;
