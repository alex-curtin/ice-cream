import { Link } from "gatsby"
import React from "react"
import styles from "../css/navbar.module.css"
import navLinks from "../constants/nav-links"

const Navbar = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav>
      {navLinks.map(link => (
        <Link key={link.id} to={link.path}>
          {link.text}
        </Link>
      ))}
    </nav>
  </header>
)

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
