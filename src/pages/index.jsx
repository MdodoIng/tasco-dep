import React from "react";
import logo from "../assets/logo.svg";
import heroImage from "../assets/coming soon .webp";
import { MainImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <>
      <title>tasco </title>
      <meta name="description" content="welcome" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />

      <meta name="application-name" content="Application Name" />

      <meta name="theme-color" content="#4285f4" />

      <meta name="description" content="A description of the page" />

      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="google" content="nositelinkssearchbox" />

      <meta name="google" content="notranslate" />

      <meta name="google-site-verification" content="verification_token" />
      <meta name="yandex-verification" content="verification_token" />
      <meta name="msvalidate.01" content="verification_token" />
      <meta name="alexaVerifyID" content="verification_token" />
      <meta name="p:domain_verify" content="code_from_pinterest" />
      <meta name="norton-safeweb-site-verification" content="norton_code" />

      <meta name="generator" content="program" />

      <meta name="subject" content="your document's subject" />

      <meta name="rating" content="General" />

      <meta name="referrer" content="no-referrer" />

      <meta name="format-detection" content="telephone=no" />

      <meta http-equiv="x-dns-prefetch-control" content="off" />

      <meta http-equiv="Window-Target" content="_value" />

      <meta name="ICBM" content="latitude, longitude" />
      <meta name="geo.position" content="latitude;longitude" />
      <meta name="geo.region" content="country[-state]" />
      <meta name="geo.placename" content="city/town" />

      <meta name="monetization" content="$paymentpointer.example" />
      <div className="flex items-center justify-center flex-col m-8 h-screen">
        <MainImage
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="object-contain object-center w-auto h-20"
        />
        <MainImage
          src={heroImage}
          width={100}
          height={100}
          alt="logo"
          className="object-contain object-center w-auto h-[70%]"
        />
      </div>
    </>
  );
};

export default index;
