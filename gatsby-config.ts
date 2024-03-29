import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `samroy.io`,
    siteUrl: `https://www.samroy.io`
  },
  plugins: [{
    resolve: 'gatsby-plugin-zopfli',
    options: {
      extensions: ['css','html','js','svg','png','mdx','md', 'tsx','ts','json'],
      compression: {
        numiterations: 25
      }
    }
  },{
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },"gatsby-plugin-sharp","gatsby-plugin-emotion", "gatsby-plugin-mdx", "gatsby-plugin-image", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
