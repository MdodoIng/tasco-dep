import { Link } from "gatsby";
import React from "react";

const data = [
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
  },
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
  },
  {
    title: "Lorem Ipsum Lorem IpsumLorem IpsumLorem",
    description:
      "Nam condimentum elit iaculis sem maecenas vitae eu nunc. Mattis odio lectus at morbi. Mauris blandit elit mauris malesuada sed in nibh tincidunt suscipit.",
    date: "25 March 2023",
  },
];

const News = () => {
  return (
    <div className="main_padding lg:mt-32 mt-14">
      <div className=" max-w-[1440px] mx-auto">
        <h1 className="text-3xl text-primary font-medium leading-[180%]">
          What’s new at Taasco
        </h1>
        <div className="mt-8 flex items-center justify-between w-full overflow-x-scroll gap-10">
          {data.map((item, idx) => (
            <div key={idx} className="grid shrink-0">
              <small className="text-black tracking-[0.02em] text-sm leading-[100%] font-light">
                {item.date}
              </small>
              <h3 className="mt-3 font-light text-primary text-2xl  leading-[140%] tracking-[-0.03em] max-w-[320px] line-clamp-2">
                {item.title}
              </h3>
              <p className="mt-3 font-light leading-[137%] text-base tracking-[-0.03em] text-primary max-w-[400px] line-clamp-3">
                {item.description}
              </p>

              <Link
                to={`/news/${idx}`}
                className="mt-7 font-light text-base underline text-primary underline-offset-4"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
        <Link to="/news"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
          }}
          className="mt-11 px-5 py-2 flex items-center justify-center text-primary w-max border-[1.5px] border-primary rounded-[5px] font-light text-base tracking-[-0.03em] cursor-pointer select-none"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default News;
