import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'

interface BlogPageProps {
    data: {
      site: {
          siteMetadata: {
              title: string;
              siteUrl: string;
          }
      }
      allContentfulHomePage: {
          edges: {
              node: {
                  welcomeText: {
                      welcomeText: string;
                  }
                  text: string;
                  id: string;
              }
          }
      }
      contentfulHomePageWelcomeTextTextNode: {
          welcomeText: string;
      }
      contentfulHomePage: {
          welcomeText: {
              welcomeText: string;
          }
          text: string;
      }

    }
}
export const BlogPageQuery = graphql`
    query BlogPageQuery {
        site {
            siteMetadata {
                title,
                siteUrl
            }
        }
        allContentfulHomePage {
            edges {
                node {
                    welcomeText {
                        welcomeText
                    },
                    text,
                    id
                }
            }
        }
        contentfulHomePageWelcomeTextTextNode {
            welcomeText
        }
        contentfulHomePage {
            welcomeText {
                welcomeText
            }
            text
        }
    }
`
class BlogPage extends Component<BlogPageProps, {}> {
    render() {
        const {
            title,
            siteUrl
            } = this.props.data.site.siteMetadata
        
        const welcomeText = this.props.data.contentfulHomePage.welcomeText.welcomeText
        const headerText = this.props.data.contentfulHomePage.text

        return (
            <div>
                <p>{headerText}</p>
                <p>{welcomeText}</p>
                <div>
                    <p>Title: {title}
                    </p>
                    <p>Site: {siteUrl}</p>
                </div>
            </div>
        )
    }
}
export default BlogPage