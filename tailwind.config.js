/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#253B6E",
        lightBlue: "#E3ECFF",
      },
      screens: {
        xs: "400px",
      },

      fontFamily: {
        elMessiri: [`El Messiri, sans-serif`],
        LexendDeca: [`Lexend Deca, sans-serif`],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
