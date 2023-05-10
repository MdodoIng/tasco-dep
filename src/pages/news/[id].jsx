import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MainImage } from "gatsby-plugin-image";
import second5 from "../../assets/images/news/Blog Image1.webp";

const SingleNews = (props) => {
  // const news = props.data.allContentfulSpeakerboxBlog.edges.filter(
  //   (element) => element.node.id === props.id && element
  // )[0].node;

  const news = "";
  return (
    <div className="min-h-screen">
      <Header />
      <div className="main_padding w-full pt-40 ">
        <div className=" max-w-[1440px] mx-auto grid sm:grid-cols-2 w-full gap-10">
          <div>
            <span className="mt-3 bg-lightBlue w-max px-3 py-1 rounded-[4px] font-semibold text-[#3056D3] text-[9px]">
              Dec 22, 2023
            </span>
            <h4 className="mt-[8px] font-normal text-primary sm:text-3xl text-2xl sm:leading-[140%] leading-[140%] tracking-[-0.04em] max-w-[480px]">
              Meet AutoManage, the best AI management tools
            </h4>
            <div className="flex sm:hidden items-center justify-center w-full h-max rounded-[5px] overflow-hidden mt-4">
              <MainImage
                src={second5}
                alt="image"
                width={500}
                height={500}
                loading="lazy"
                className="object-contain object-center w-full h-auto"
              />
            </div>
            <p className="mt-3 font-light text-xs leading-[150%] text-primary max-w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.c Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
          <div className="sm:flex hidden items-center justify-center w-full h-full rounded-[5px] overflow-hidden max-h-[300px]">
            <MainImage
              src={second5}
              alt="image"
              width={500}
              height={500}
              loading="lazy"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        <div className="mt-20">
          <h5 className="text-primary font-normal text-xl ">Share it on</h5>
          <div className="flex items-center justify-start mt-3 gap-4">
            <a
              href={`whatsapp://send/?text=${news.heading}%20${props.location.href}`}
              target="_blank"
              className="w-[38px] h-[38px] bg-primary rounded-[13px] flex items-center justify-center group hover:bg-[#E3ECFF] duration-300"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3015 2.10577C11.6381 1.43565 10.8479 0.904325 9.97698 0.542793C9.10608 0.181262 8.1719 -0.00324189 7.22894 4.31057e-05C3.27799 4.31057e-05 0.0578896 3.22014 0.0578896 7.1711C0.0578896 8.43743 0.390754 9.66758 1.01307 10.753L0 14.4724L3.79899 13.4738C4.84824 14.0455 6.02774 14.3494 7.22894 14.3494C11.1799 14.3494 14.4 11.1293 14.4 7.17833C14.4 5.26075 13.6547 3.45894 12.3015 2.10577ZM7.22894 13.1337C6.15799 13.1337 5.10874 12.8443 4.18975 12.3015L3.97266 12.1713L1.71497 12.7647L2.31558 10.5649L2.17085 10.3405C1.57586 9.39041 1.25992 8.29216 1.2591 7.1711C1.2591 3.88587 3.93648 1.20849 7.22171 1.20849C8.81367 1.20849 10.3116 1.8308 11.4332 2.95964C11.9885 3.51246 12.4286 4.17001 12.728 4.89418C13.0274 5.61835 13.18 6.39473 13.1771 7.17833C13.1916 10.4636 10.5142 13.1337 7.22894 13.1337ZM10.4997 8.67622C10.3188 8.58939 9.43598 8.15522 9.27678 8.09009C9.11035 8.0322 8.99457 8.00326 8.87156 8.17693C8.74854 8.35783 8.40844 8.76306 8.30713 8.87884C8.20583 9.00185 8.09729 9.01632 7.91638 8.92225C7.73548 8.83542 7.15658 8.64004 6.47638 8.0322C5.9409 7.55461 5.58633 6.96848 5.47779 6.78758C5.37648 6.60667 5.46332 6.5126 5.55739 6.41853C5.63698 6.33894 5.73829 6.20868 5.82513 6.10738C5.91196 6.00607 5.94814 5.92647 6.00603 5.81069C6.06392 5.68768 6.03497 5.58637 5.99156 5.49954C5.94814 5.41271 5.58633 4.52989 5.44161 4.16808C5.29688 3.82075 5.14492 3.86416 5.03638 3.85693H4.68904C4.56603 3.85693 4.37789 3.90034 4.21146 4.08125C4.05226 4.26215 3.58915 4.69632 3.58915 5.57914C3.58915 6.46195 4.23317 7.31582 4.32 7.4316C4.40683 7.55461 5.58633 9.36366 7.3809 10.1379C7.80784 10.3261 8.1407 10.4346 8.40121 10.5142C8.82814 10.6517 9.21889 10.63 9.53005 10.5866C9.87739 10.5359 10.5938 10.1524 10.7385 9.7327C10.8905 9.31301 10.8905 8.95843 10.8398 8.87884C10.7891 8.79924 10.6806 8.76306 10.4997 8.67622Z"
                  fill="#E3ECFF"
                  className="group-hover:fill-[#20363C] duration-300"
                />
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.location.href}`}
              target="_blank"
              className="w-[38px] h-[38px] bg-primary rounded-[13px] flex items-center justify-center group hover:bg-[#E3ECFF] duration-300"
            >
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1964 14.4L15.2 14.3994V9.1182C15.2 6.5346 14.6438 4.5444 11.6234 4.5444C10.1714 4.5444 9.19697 5.3412 8.79917 6.0966H8.75717V4.7856H5.89337V14.3994H8.87537V9.639C8.87537 8.3856 9.11297 7.1736 10.6652 7.1736C12.1946 7.1736 12.2174 8.604 12.2174 9.7194V14.4H15.1964Z"
                  fill="#E3ECFF"
                  className="group-hover:fill-[#20363C] duration-300"
                />
                <path
                  d="M1.0376 4.78621H4.0232V14.4H1.0376V4.78621Z"
                  fill="#E3ECFF"
                  className="group-hover:fill-[#20363C] duration-300"
                />
                <path
                  d="M2.52919 0C1.57459 0 0.799988 0.7746 0.799988 1.7292C0.799988 2.6838 1.57459 3.4746 2.52919 3.4746C3.48379 3.4746 4.25839 2.6838 4.25839 1.7292C4.25779 0.7746 3.48319 0 2.52919 0Z"
                  fill="#E3ECFF"
                  className="group-hover:fill-[#20363C] duration-300"
                />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer.php?u=${props.location.href}`}
              target="_blank"
              className="w-[38px] h-[38px] bg-primary rounded-[13px] flex items-center justify-center group hover:bg-[#E3ECFF] duration-300"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.27384 13.8656V7.54133H7.39579L7.71415 5.0759H5.27384V3.50209C5.27384 2.78852 5.47118 2.30222 6.4956 2.30222L7.80004 2.30169V0.0965255C7.57445 0.0672104 6.8001 0 5.89884 0C4.01686 0 2.72842 1.14874 2.72842 3.25792V5.0759H0.600037V7.54133H2.72842V13.8656H5.27384Z"
                  fill="#E3ECFF"
                  className="group-hover:fill-[#20363C] duration-300"
                />
              </svg>
            </a>
            <a
              href={`http://twitter.com/share?text=${news.heading} goes here&url=${props.location.href} goes 
              here&hashtags=''`}
              target="_blank"
              className="w-[38px] h-[38px] bg-primary rounded-[13px] flex items-center justify-center group hover:bg-[#E3ECFF] duration-300"
            >
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6 1.73511C14.0645 1.97001 13.4939 2.12571 12.899 2.20131C13.511 1.83591 13.9781 1.26171 14.1977 0.569606C13.6271 0.909806 12.9971 1.15011 12.3257 1.28421C11.7839 0.707306 11.0117 0.350006 10.1693 0.350006C8.53491 0.350006 7.21911 1.67661 7.21911 3.30291C7.21911 3.53691 7.23891 3.76191 7.28751 3.97611C4.83321 3.85641 2.66151 2.68011 1.20261 0.888206C0.947912 1.33011 0.798512 1.83591 0.798512 2.38041C0.798512 3.40281 1.32501 4.30911 2.10981 4.83381C1.63551 4.82481 1.17021 4.68711 0.776012 4.47021C0.776012 4.47921 0.776012 4.49091 0.776012 4.50261C0.776012 5.93721 1.79931 7.12881 3.14121 7.40331C2.90091 7.46901 2.63901 7.50051 2.36721 7.50051C2.17821 7.50051 1.98741 7.48971 1.80831 7.45011C2.19081 8.61921 3.27621 9.47871 4.56681 9.50661C3.56241 10.2923 2.28711 10.7657 0.906512 10.7657C0.664412 10.7657 0.432212 10.7549 0.200012 10.7252C1.50771 11.5685 3.05751 12.05 4.72881 12.05C10.1612 12.05 13.1312 7.55001 13.1312 3.64941C13.1312 3.51891 13.1267 3.39291 13.1204 3.26781C13.7063 2.85201 14.1986 2.33271 14.6 1.73511Z"
                  fill="#E3ECFF"
                  className="group-hover:fill-[#20363C] duration-300"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleNews;
