import React from "react";
import groupIcon from "../assets/icons/group.svg";
import eyeIcon from "../assets/icons/eye.svg";
import { MainImage } from "gatsby-plugin-image";

const content = {
  english: [
    {
      icon: groupIcon,
      title: "About us",
      description:
        "TAASCO Interiors & fit-outs is one of the modern interior fit-out companies in KSA. With new generation methods and technology we offer turnkey interior solutions, flooring, ceiling, gypsum partition, joinery works, curtain, blinds wallpaper etc. AI design innovates the company's interior spaces with the help of design and technology. We are experts in designing and executing architectural plans in addition to designing and building projects.",
    },
    {
      icon: eyeIcon,
      title: "Vision",
      description:
        "Our vision is to maintain and develop our presence as a leading contracting company in the market, whose reputation is built on trust thatwe provide our clients with high quality and efficient service through innovative applications of engineering capability and technology.",
    },
  ],
  arabic: [
    {
      icon: groupIcon,
      title: "معلومات عنا",
      description:
        "TAASCO للديكور الداخلي والتجهيزات هي واحدة من شركات الديكور الداخلي الحديثة في المملكة العربية السعودية. من خلال أساليب وتقنيات الجيل الجديد ، نقدم حلولًا داخلية جاهزة ، وأرضيات ، وسقفًا ، وقسمًا من الجبس ، وأعمال نجارة ، وستائر ، وورق حائط للستائر الخ. نحن خبراء في تصميم وتنفيذ المخططات المعمارية بالإضافة إلى تصميم وبناء المشاريع.",
    },
    {
      icon: eyeIcon,
      title: "رؤية",
      description:
        "تتمثل رؤيتنا في الحفاظ على وجودنا وتطويره كشركة مقاولات رائدة في السوق ، والتي بُنيت سمعتها على الثقة التي نوفر لعملائنا خدمة عالية الجودة وفعالة من خلال التطبيقات المبتكرة للقدرات الهندسية والتكنولوجيا.",
    },
  ],
};

const AboutUs = ({ isLanguage }) => {
  return (
    <div id="about_us" className="main_padding  sm:mt-40 mt-14">
      <div className="max-w-[1440px] mx-auto grid sm:grid-cols-2 gap-20">
        {(isLanguage ? content.arabic : content.english).map((item, idx) => (
          <div
            key={idx}
            className={`${isLanguage ? "items-end" : "items-start"} flex flex-col`}
          >
            <span>
              <MainImage
                src={item.icon}
                alt="icon"
                width={50}
                height={50}
                loading="lazy"
                className="object-contain lg:max-h-[60px] max-h-[40px] h-full w-auto"
              />
            </span>
            <h2 className="font-medium text-primary lg:text-2xl text-xl mt-2">
              {item.title}
            </h2>
            <p
              className={`font-light text-primary lg:text-lg text-base leading-[180%] mt-2 ${
                isLanguage ? "text-right" : "text-justify"
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
