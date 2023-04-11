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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `The Cool Application`,
        short_name: `Cool App`,
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
