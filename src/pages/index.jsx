import React, { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import ContactUs from "../components/ContactUs";
import News from "../components/News";
import { graphql } from "gatsby";

const Home = (props) => {
  const [isLanguage, setIsLanguage] = useState("");
  useEffect(() => {
    if (typeof window !== undefined) {
      console.log(window.localStorage);
    }
  }, []);

  return (
    <div
      className={isLanguage ? "font-elMessiri text-right" : "font-LexendDeca"}
    >
      <Header isLanguage={isLanguage} setIsLanguage={setIsLanguage} />
      <Hero isLanguage={isLanguage} />
      <AboutUs isLanguage={isLanguage} />
      <OurServices isLanguage={isLanguage} />
      <News
        data={props.data.allContentfulNewsAndInfermation.edges}
        isLanguage={isLanguage}
      />
      <ContactUs isLanguage={isLanguage} />
      <Footer isLanguage={isLanguage} />
    </div>
  );
};

export default Home;

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
          heading
          headingArabic
          descriptionArabic {
            descriptionArabic
          }
        }
        next {
          createdAt(formatString: "MMMM DD, YYYY", locale: "ar-SA")
        }
      }
    }
  }
`;
