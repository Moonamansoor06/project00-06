import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header  siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0.5rem auto`,
        
        }}
      >
        {children}
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.twitter,com/MMansoor06" style={{ color: 'hsla(0, 0%, 0%, 0.5)' }}>Moona Mansoor</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout