import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `samroy.io`,
    siteUrl: `https://www.samroy.io`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": `.env.${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
      "spaceId": `.env.${process.env.CONTENTFUL_SPACE_ID}`
    }
  }, "gatsby-plugin-emotion", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
