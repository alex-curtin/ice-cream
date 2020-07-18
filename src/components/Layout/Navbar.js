import React, { useState } from "react"
import cx from "classnames"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FiMenu } from "react-icons/fi"
import navLinks from "../../constants/nav-links"
import styles from "../../css/navbar.module.css"

const Navbar = ({ siteTitle, isHome }) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className={`${styles.header} ${isHome ? styles.home : ""}`}>
      <h1>
        <AniLink to="/">{siteTitle}</AniLink>
      </h1>
      <FiMenu className={styles.burger} onClick={() => setNavOpen(!navOpen)} />
      <nav className={navOpen ? styles.navOpen : styles.navClosed}>
        {navLinks.map(link => (
          <AniLink
            fade
            key={link.id}
            to={link.path}
            className={styles.link}
            activeClassName={styles.active}
          >
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
