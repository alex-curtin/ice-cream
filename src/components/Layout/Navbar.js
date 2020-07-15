import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import navLinks from "../../constants/nav-links"
import styles from "../../css/navbar.module.css"

const Navbar = ({ siteTitle, isHome }) => {
  console.log(isHome)
  return (
    <header className={`${styles.header} ${isHome ? styles.home : ""}`}>
      <h1>
        <AniLink to="/">{siteTitle}</AniLink>
      </h1>
      <nav>
        {navLinks.map(link => (
          <AniLink fade key={link.id} to={link.path} className={styles.link}>
            {link.text}
          </AniLink>
        ))}
      </nav>
    </header>
  )
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
