import * as React from "react"

// styles
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        samroy.io
        <br />
      </h1>
      <p>
        <code style={codeStyles}>Coming soon.</code>
      </p>
      <p>
        Test page using&nbsp;
        <a
          href={'blogtest/'}
          >
            contentful
          </a>
      </p>
      <p>
        Test page using&nbsp;
        <a
          href={'test/'}
          >
            markdown
          </a>
      </p>
    </main>
  )
}

export default IndexPage