import { link } from "fs"
import { ClientRequest } from "http"
import * as React from "react"

// styles
const pageStyles = {
  color: "#fdf6e3",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
  color: "#fdf6e3"
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#268bd2",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#fdf6e3",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "here",
  url: "gatsby/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const bodyStyle = {
  backgroundColor: "#002b36",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        samroy.io
        <br />
      </h1>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Coming soon.</code>
      </p>
      <p style={paragraphStyles}>
        Test page using&nbsp;
        <a
          style={linkStyle}
          href={'blog/'}
          >
            contentful
          </a>
      </p>
      <p style={paragraphStyles}>
        Test page using&nbsp;
        <a
          style={linkStyle}
          href={'test/'}
          >
            markdown
          </a>
      </p>
    </main>
  )
}

export default IndexPage
