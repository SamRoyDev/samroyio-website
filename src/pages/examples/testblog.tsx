/*import React, { Component } from 'react'
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

export const slug = "blogtest"

export const query = graphql`
query MyQuery($slug: String) {
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

const Page = ({data}) => {
    return (
      <div>
        Hello!
        {data.allContentfulMdxPage.nodes.title}
        {data.allContentfulMdxPage.nodes.slug}
      </div>
    )
  }

class MDXPage extends Component<Props, {}> {
    render() {
        const headerText = this.props.data.allContentfulMdxPage.nodes.title
        const mdxBody = this.props.data.allContentfulMdxPage.nodes.body
        const mdxSlug = this.props.data.allContentfulMdxPage.nodes.slug

        return (
            <main>
                <title>blog</title>
                <h1>Title: {headerText}</h1>
                <p>Site: {}</p>
                <p>Url: {}</p>
                <p>Body: {mdxBody}</p>
                <p>Slug: {mdxSlug}</p>
            </main>
        )
    }
}
*/
const MDXPage = () => {
  return (null)
}

export default MDXPage