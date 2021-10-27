import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const Header = ({ siteTitle }) => {
  
  return(
  <header
    style={{
    
      background: ` #c94c4c`,
      marginBottom: `1.45rem`,
      alignItems:"start",
      alignContent:'start'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 500,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0,display:'flex',flexDirection:'row',alignContent:'space-around' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform:'capitalize'
          }}
        >
          {siteTitle}
        </Link>
      
      </h1>
    </div>
  </header>
)
        }
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
