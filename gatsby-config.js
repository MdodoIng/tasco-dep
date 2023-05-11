/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `tasco`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `nx9wdrot8dk9`,
        accessToken: `xJ00wcJ8skRQ3rUg-c_XC0UM5skA-JA0qdhI35eOr60`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Lexend Deca, sans-serif`,
            file: `https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap`,
          },
          {
            name: `El Messiri, sans-serif`,
            file: `https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `taasco`,
        short_name: `taasco`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: "src/assets/favicon.png",

        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        icons: [
          {
            src: `src/assets/favicon.png`,
            sizes: `192x192`,
            type: "image/png",
            purpose: `maskable`,
          },
          {
            src: `src/assets/favicon.png`,
            sizes: `512x512`,
            type: "image/png",
            purpose: `maskable`,
          },
        ],
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
  ],
};
