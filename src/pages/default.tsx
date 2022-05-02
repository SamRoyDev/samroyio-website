import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface Props {
  data: {
    allContentfulMdxPage: {
        nodes: {
              title: string;
              slug: string;
              body: {
                  body: MDXRenderer;
              }
        }
    }
    site: {
      siteMetadata: {
          title: string;
          siteUrl: string;
          }
      }
  }
}

export const query = graphql`
query MyQuery2($slug: String) {
    allContentfulMdxPage(filter: {slug: {eq: $slug}}) {
      nodes {
        title
        slug
        id
        body {
          body
        }
      }
    }
  }
`
/* 
const BlogTemplate = (contentfulPage) => {
  const allBlogPosts = query;
  return (
    <Fragment>
      <h1>{contentfulPage.title}</h1>
      <p>{contentfulPage.description.description}</p>
      {contentfulPage.image ? (
        <img
          src={contentfulPage.image.file.url}
          alt={contentfulPage.title}
          style={{
            width: 300,
            height: 'auto'
          }}
        />
      ) : null}
      <ul>
        {allBlogPosts.map((node, index) => {
          const { title, gatsbyPath } = node;
          return (
            <li key={index}>
              <Link to={gatsbyPath}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default BlogTemplate;
*/